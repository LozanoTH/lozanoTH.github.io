# LozanoTH - Modern Web App Dashboard

Bienvenido a **LozanoTH**, una aplicación web progresiva (PWA) diseñada con un enfoque móvil-primero (Android Style) que integra herramientas de comunicación en tiempo real y gestión de enlaces con analíticas avanzadas.

## 🚀 Características Principales

### 1. Sistema de Autenticación Premium
- **Auto-Login:** El sistema detecta sesiones activas mediante `localStorage` para redirigir automáticamente al Dashboard.
- **Interfaz Moderna:** Pantalla de inicio de sesión con degradados dinámicos, tarjetas con sombras suaves y animaciones de entrada (`fadeIn`).
- **Validación Externa:** Las credenciales se validan contra un repositorio remoto seguro de GitHub para una gestión centralizada.

### 2. Chat Global en Tiempo Real
- **Arquitectura:** Desarrollado sobre **Firebase Realtime Database**.
- **Interfaz Estilo WhatsApp:** 
  - Burbujas de chat alineadas (propios a la derecha, otros a la izquierda).
  - Diferenciación de colores para mayor claridad visual.
  - Envío rápido mediante la tecla `Enter`.
- **Optimización de Recursos:**
  - **Carga Limitada:** Solo se sincronizan los últimos 50 mensajes para ahorrar datos y memoria.
  - **Diff Rendering:** El chat solo se actualiza si detecta cambios nuevos en la base de datos, eliminando parpadeos molestos.
  - **Formato Estándar:** Marcado de tiempo (Timestamp) unificado para todos los usuarios.

### 3. Acortador de Links Inteligente
- **Generación Instantánea:** Crea enlaces cortos (`ver.html?id=...`) almacenados en Firebase.
- **Historial Local:** Lista de enlaces recientemente creados guardada en el dispositivo para acceso rápido.
- **Gestión de Enlaces:** Opción de eliminar permanentemente enlaces (con verificación de propiedad/creador).
- **Copiado Rápido:** Botón integrado para copiar al portapapeles con un solo toque.

### 4. Analíticas de Geolocalización (Tracking)
- **Detección de País:** Utiliza la API de `ipapi.co` para identificar el origen geográfico de cada clic.
- **Fuentes de Tráfico:** Rastreo de Referrer para saber si el clic vino de Facebook, Instagram, Google o acceso directo.
- **Visor de Estadísticas:** Modal detallado dentro del Dashboard que muestra:
  - Contador total de vistas.
  - Registro de los últimos accesos (Fecha, Hora, Fuente y País).

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:** HTML5, CSS3 (Vanilla), JavaScript (ES6+).
- **Base de Datos:** Firebase Realtime Database (mensajes y enlaces).
- **Auth Data:** GitHub Raw Content (JSON).
- **APIs de Terceros:** ipapi.co (Geolocalización).
- **Diseño:** Google Fonts (Segoe UI / Inter), Box Shadows, CSS Animations.

## 📁 Estructura del Proyecto

```text
├── index.html          # Pantalla de Login (Punto de entrada)
├── home.html           # Dashboard principal / Menú
├── chat.html           # Sistema de mensajería optimizado
├── vis.html            # Generador y Administrador de links
├── ver.html            # Motor de redirección y captura de datos
├── utilidades/
│   └── hedder.html     # Componente global de navegación (Top Bar)
└── README.md           # Esta documentación
```

## 🔒 Seguridad
- **Permisos de Eliminación:** Solo el usuario que creó un enlace tiene el permiso técnico para eliminarlo de la base de datos.
- **Sesión Segura:** Verificación continua de estado `auth` en cada página protegida.

---
© 2026 LozanoTH - Desarrollado para una experiencia móvil superior.
