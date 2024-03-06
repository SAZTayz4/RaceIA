package handlers

import (
	"encoding/json"
	"net/http"
)

type RobotData struct {
	Vitesse  float64 `json:"vitesse"`
	Distance float64 `json:"distance"`
}

var robotDataList []RobotData

func PostDataHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Méthode non autorisée", http.StatusMethodNotAllowed)
		return
	}

	var data RobotData
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&data)
	if err != nil {
		http.Error(w, "Erreur de décodage JSON", http.StatusBadRequest)
		return
	}

	robotDataList = append(robotDataList, data)

	w.Write([]byte("Données reçues avec succès"))
}
