# 🎬 Movie Collection App

React, TypeScript ve Vite kullanarak geliştirilen bir Movie Collection App. Bu uygulama, kullanıcıların TMDB API’sinden filmleri keşfetmelerine, film detaylarını görmelerine ve filmleri favorilere eklemelerine olanak tanır. Favori filmler özel bir sayfada görüntülenebilir.

## 🚀 Özellikler

- **Film Listeleme**: TMDB API’sinden alınan filmleri listeleme.
- **Film Detayları**: Her filmin detaylarını görüntüleme; başlık, açıklama, oy ortalaması, oy sayısı gibi bilgileri görme.
- **Favoriler**: Filmleri favorilere ekleyip, bunları favoriler sayfasında görüntüleme.
- **Responsive Tasarım**: Tailwind CSS kullanarak duyarlı ve temiz bir UI tasarımı.
- **Dialog Pencereleri**: Film detayları, Radix UI kullanarak dialog penceresinde gösterilir.

## 🛠️ Kullanılan Teknolojiler

- **React (v19.0.0)**: Bileşen yapısını kullanarak MovieCard, MovieDetails ve FavoritesPage gibi modülleri oluşturmak için kullanıldı.
- **TypeScript**: Tip güvenliği sağlayarak hata oranını azaltmak için tüm bileşenlerde kullanıldı.
- **Vite**: Hızlı geliştirme ortamı sağlamak için proje yapılandırmasında kullanıldı.
- **Tailwind CSS**: Kullanıcı arayüzünü hızlı ve esnek bir şekilde tasarlamak için MovieCard, butonlar ve favoriler sayfasında kullanıldı.
- **Radix UI (Dialog)**: Film detaylarını gösteren açılır pencere (modal) bileşeni için kullanıldı.
- **Ant Design**: UI bileşenlerini (butonlar, ikonlar) daha modern ve şık hale getirmek için kullanıldı.
- **Axios**: TMDB API’sine HTTP istekleri yaparak film verilerini almak için kullanıldı.
- **Zustand**: Favorilere eklenen filmleri saklamak için kullanıldı.
- **Lodash**: Arama işlemlerinde gereksiz API isteklerini önlemek için `debounce` fonksiyonu ile kullanıldı.
- **TMDB API**: Film verilerini çekmek için kullanıldı.

## 📸 Ekran Görüntüleri
- **Ana Ekran**
  ![ana ekran](https://github.com/user-attachments/assets/3bceaffc-436b-4567-8840-65995b7f8339)
- **Detay Sayfası**
 ![detay sayfası](https://github.com/user-attachments/assets/ec02fbda-46a7-4e86-8897-b125b6882201)
- **Favori Sayfası**
 ![favori sayfası](https://github.com/user-attachments/assets/8114f599-63f7-4559-8eca-4fb8a2b9d64a)


## ⚙️ Kurulum

1. Bu projeyi klonlayın:
   ```bash
   git clone <https://github.com/busracogul/movie-collection-app.git>
   cd movie-collection-app
   ```
2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
3. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```
4. Uygulamayı tarayıcınızda görüntüleyin:
   ```bash
   http://localhost:5173
   ```
