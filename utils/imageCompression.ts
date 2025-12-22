/**
 * Compresses a Base64 image string by resizing and converting to JPEG.
 * @param base64Str The original base64 string (e.g., from PNG)
 * @param maxWidth Maximum width for the image (default 800px)
 * @param quality JPEG quality 0-1 (default 0.7)
 * @returns Promise<string> Compressed base64 string
 */
export const compressImage = (base64Str: string, maxWidth = 800, quality = 0.7): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = base64Str;
      
      img.onload = () => {
        try {
            const canvas = document.createElement('canvas');
            let width = img.width;
            let height = img.height;
    
            // Calculate new dimensions
            if (width > maxWidth) {
              height = Math.round((height * maxWidth) / width);
              width = maxWidth;
            }
    
            canvas.width = width;
            canvas.height = height;
            
            const ctx = canvas.getContext('2d');
            if (!ctx) {
               console.warn('Canvas context not available, returning original');
               resolve(base64Str);
               return;
            }
    
            // Draw and compress
            ctx.fillStyle = '#FFFFFF'; // Fill background white for transparent PNGs
            ctx.fillRect(0, 0, width, height);
            ctx.drawImage(img, 0, 0, width, height);
            
            const compressed = canvas.toDataURL('image/jpeg', quality);
            resolve(compressed);
        } catch (e) {
            console.error('Compression failed', e);
            resolve(base64Str); // Fallback to original
        }
      };
  
      img.onerror = (err) => {
        console.warn('Image load failed for compression', err);
        resolve(base64Str);
      };
    });
  };