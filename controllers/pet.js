const { supabase } = require("../db");

// Fetch all pets
async function fetchPets(req, res) {
    try {
        const { data: document, error } = await supabase
            .from("Puppies")
            .select("*");

        if (error) {
            throw error;
        }
        res.json(document);
    } catch (error) {
        console.error("Error fetching Puppies:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Fetch a single pet by id
async function fetchDetails(req, res) {
    try {
        const { id } = req.params;
        const { data: document, error } = await supabase
            .from("Puppies")
            .select("*")
            .eq("id", id)
            .single();

        if (error) {
            throw error;
        }
        res.json(document);
    } catch (error) {
        console.error("Error fetching Puppy:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

// Fetch pets by type and/or size
async function filterPets(req, res) {
    try {
        const { type, size } = req.params;

        let query = supabase.from("Puppies").select("*");

        if (type) {
            query = query.eq("type", type);
        }

        if (size) {
            query = query.eq("size", size);
        }

        const { data: document, error } = await query;

        if (error) {
            throw error;
        }

        res.json(document);
    } catch (error) {
        console.error("Error filtering Puppies:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { fetchDetails, fetchPets, filterPets };
