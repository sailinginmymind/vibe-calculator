# vibe-calculator
Provo a fare una calcolatrice... dovrebbe essere facile, no?
*è stato divertente, lo ammetto ^^

# Neumorphic Calculator (PWA)

Una calcolatrice web focalizzata sull'estetica Neumorfica e sull'integrazione PWA. L'obiettivo era creare un tool semplice ma tecnicamente completo, capace di girare nativamente su mobile.

## Perché questo progetto?
Volevo testare la gestione dei layout complessi con **CSS Grid** e l'implementazione degli standard **PWA**. Invece della solita interfaccia piatta, ho scelto il Neumorfismo per lavorare sulle ombre (box-shadow) e sulla profondità visiva.

## Caratteristiche Tecniche
- **PWA Ready:** Funziona offline grazie a un Service Worker che gestisce la cache dei file statici.
- **Installabile:** Include un file manifest per l'integrazione su iOS e Android (Aggiungi a Home).
- **Interfaccia:** Layout responsive costruito con CSS Grid, ottimizzato per il touch.
- **Logica:** Gestione delle operazioni matematiche tramite JavaScript, inclusa la funzione percentuale e il recupero degli errori di sintassi.

## Demo
Puoi testare "l'app" direttamente qui: [https://sailinginmymind.github.io/vibe-calculator/]

## Note di sviluppo
Il progettino è stato sviluppato con un approccio iterativo, aggiungendo via via layer di complessità (UI, gestione della memoria cache e ottimizzazione per il mobile).
