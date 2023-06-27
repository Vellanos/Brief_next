# Brief Spotify

Ce brief est un clone de Spotify réalisé avec Next.js 13 et qui consomme l'API Spotify.

## Fonctionnalités

- Connexion au compte utilisateur
- Affichage des musiques récemment écoutées par l'utilisateur
- Affichage des playlists générales

## Prérequis

- Node.js et NPM

## Installation

1. Cloner le dépôt:

```
git clone https://github.com/Vellanos/Brief_next
```

2. Créer une application sur le site de Spotify consacré aux developpeurs 

```
https://developer.spotify.com/dashboard
```

3. Dans le dashboard Spotify de votre application, définir "Redirect URis" : 

```
http://localhost:3000/api/auth/callback/spotify
```
4. Naviguer dans le dossier projet, renommer et modifier le fichier .envExemple.local en .env.local

5. Lancer le projet en mode développement

```
npm install
npm run dev
```
6. Construire le projet et lancer en mode production

```
npm install
npm run build
npm run start
```
