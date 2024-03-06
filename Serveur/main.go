// main.go

package main

import (
	"fmt"
	"net/http"

	"raceia/handlers"
)

func main() {
	http.HandleFunc("/", handlers.HomeHandler)
	http.HandleFunc("/board", handlers.BoardHandler)
	http.HandleFunc("/postData", handlers.PostDataHandler)
	http.HandleFunc("/getData", handlers.GetHandler)

	// Servir les fichiers statiques depuis le dossier "assets"
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("assets"))))

	fmt.Println("Serveur écoutant sur le port :3000...")
	http.ListenAndServe(":3000", nil)
}
