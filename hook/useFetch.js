import react from "react";
import {useState, useEffect} from react;
import axios from 'axios';

const useFecth = () => {
    const [data, setData] =  useState ([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
}