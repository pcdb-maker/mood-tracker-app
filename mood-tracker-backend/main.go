package main

import (
    "encoding/json"
    "net/http"
    "github.com/gorilla/mux"
	"github.com/gorilla/handlers"
    "time"
)

// Define the Mood struct
type Mood struct {
    Date time.Time `json:"date"`
    Mood string    `json:"mood"`
}

// Slice to store moods in memory
var moods []Mood

// Handler function to log a mood (POST request)
func logMood(w http.ResponseWriter, r *http.Request) {
    var mood Mood
    _ = json.NewDecoder(r.Body).Decode(&mood) // Decode the JSON request into a Mood object
    moods = append(moods, mood)               // Append the mood to the slice
    json.NewEncoder(w).Encode(mood)           // Respond with the logged mood
}

func getMoods(w http.ResponseWriter, r *http.Request) {
    if moods == nil {
        moods = []Mood{}  // Ensure moods is initialized to an empty array
    }
    json.NewEncoder(w).Encode(moods)
}


func main() {
    router := mux.NewRouter()

    // Define your endpoints
    router.HandleFunc("/mood", logMood).Methods("POST")
    router.HandleFunc("/moods", getMoods).Methods("GET")

    // Enable CORS for localhost:3000 (React app)
    headers := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
    methods := handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE"})
    origins := handlers.AllowedOrigins([]string{"http://localhost:3000"})

    // Wrap the router with CORS handler
    http.ListenAndServe(":8000", handlers.CORS(headers, methods, origins)(router))
}


