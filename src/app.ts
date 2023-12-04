import express from 'express';
import "express-async-errors"; // needs to be imported before routers and other stuff!

//import { loginRouter } from './routes/login';
import { eintragRouter } from './routes/eintrag';
import { pflegerRouter } from './routes/pfleger';
import { protokollRouter } from './routes/protokoll';

const app = express();

// Middleware:
app.use('*', express.json()) // vgl. Folie 138

// Routes
//app.use("/api/login",loginRouter)   // wird erst später implementiert, hier nur Dummy; hat aber bereits einen Präfix
// TODO: Registrieren Sie hier die weiteren Router:
app.use("/api/pfleger",pflegerRouter);
app.use("/api/protokoll",protokollRouter);
app.use("/api/eintrag",eintragRouter);


export default app;