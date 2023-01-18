# websocket-remote-control

Remote control backend using nutjs.dev library and Websocket

## Downloading

```bash
git clone {repository URL}
git checkout develop
cd websocket-remote-control
```

Rename '.env-example' to '.env'.

## Installing

```bash
npm install
```

## Running

Use following commands:

`npm run start:front` - to run frontend application in production mode
`npm run start:server:dev` - to run backend application in development mode OR
`npm run start:server:prod` - to run backend application in production mode

Go to http://localhost:8181/ and reload if neccesary.

## Usage

List of websocket commands and their syntax (<- - cmd from frontend, -> - answer):

- Navigation over the x and y axis
  - Move mouse up
  ```bash
  <- mouse_up {y px}
  ```
  - Move mouse down
  ```bash
  <- mouse_down {y px}
  ```
  - Move mouse left
  ```bash
  <- mouse_left {x px}
  ```
  - Move mouse right
  ```bash
  <- mouse_right {x px}
  ```
  - Send mouse coordinates
  ```bash
  <- mouse_position
  -> mouse_position {x px},{y px}
  ```
- Drawing
  - Draw circle with pushed left button:
  ```bash
  <- draw_circle {px}
  ```
  - Draw rectangle with pushed left button:
  ```bash
  <- draw_rectangle {px} {px}
  ```
  - Draw square with pushed left button:
  ```bash
  <- draw_square {px}
  ```
- Print screen
  - Make print screen command and send image (a base64 buffer of the 200 px square around the mouse position):
  ```bash
  <- prnt_scrn
  -> prnt_scrn {base64 string (png buf)}
  ```
