import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 👈 این قسمت جدید است
  server: {
    port: 3008, // پورت مورد نظر شما
  },
  // 👆 تا اینجا
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});








<div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-2xl overflow-hidden">
                {/* کلاس های w-full h-full object-cover به عکس می‌گویند که 
                  تمام فضای والد (aspect-square) را پر کند.
                  اگر عکس شما مستطیل است، بخشی از آن ممکن است بریده شود
                  تا در کادر مربع جا بگیرد، اما کشیده نخواهد شد.
                  برای بهترین نتیجه، عکس اصلی (myimage.jpg) باید مربع باشد.
                */}
                <img
                  src={myImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10" />
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20 -z-10" />
            </div>
          </div>
        </div>
      </section>
