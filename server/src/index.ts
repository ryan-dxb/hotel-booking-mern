import express from 'express';
import cors from 'cors';
import "dotenv/config";
import userRoutes from './routes/users';


const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
));


app.get('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});