# 🌤️ WeatherApp

Una aplicación web desarrollada con **React**, **TypeScript**, y **Zoid** que permite al usuario ingresar una ciudad y país para visualizar el clima actual, incluyendo la temperatura mínima y máxima. Utiliza la **API de OpenWeather** para obtener los datos en tiempo real.

## 🚀 Funcionalidades

- Búsqueda de clima actual por **ciudad** y **país**.
- Muestra:
  - Nombre de la ciudad.
  - Clima actual.
  - Temperatura mínima y máxima.
- Manejo de errores cuando la ciudad ingresada no es encontrada o hay un problema con la solicitud.

## 🛠️ Tecnologías utilizadas

- [React](https://reactjs.org/) – Librería para construir interfaces de usuario.
- [TypeScript](https://www.typescriptlang.org/) – Superset de JavaScript con tipado estático.
- [Zoid](https://github.com/krakenjs/zoid) – Framework para comunicación entre componentes (utilizado si tenés integración embebida entre apps).
- [OpenWeather API](https://openweathermap.org/api) – API para obtener datos del clima.

## 📸 Capturas

_(Acá podés insertar imágenes de tu app en funcionamiento si querés)_

## 🧑‍💻 Instalación y uso

1. Cloná el repositorio:

   ```bash
   git clone https://github.com/kevirui/weather-plaftorm.git
   cd weather-app
   ```

2. Instalá las dependencias:

  ```bash
  npm install
  ```

3. Creá un archivo .env en la raíz del proyecto y agregá tu clave de la API de OpenWeather:

VITE_OPENWEATHER_API_KEY=tu_api_key

4. Iniciá el proyecto:

  ```bash
  npm run dev
  ```

5. Accedé desde el navegador: http://localhost:5173

## 📦 Estructura del proyecto

```md
src/
├── components/
│   ├── Alert/
│   │   └── Alert.tsx
│   ├── Form/
│   │   └── Form.tsx
│   ├── hooks/
│   │   └── useWeather.ts
│   ├── Spinner/
│   │   └── Spinner.tsx
│   └── WeatherDetail/
│       └── WeatherDetail.tsx
├── data/
│   └── countries.ts
├── helpers/
│   └── index.ts
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
```

## ❗ Errores y manejo

- Si no se encuentra la ciudad ingresada, la aplicación mostrará un mensaje de error amigable indicando que no se pudo obtener la información del clima.

## 🌍 Créditos

- Datos de clima provistos por OpenWeather
- Desarrollado con ❤️ en TypeScript y React

## 📄 Licencia
Este proyecto está bajo la licencia MIT.
