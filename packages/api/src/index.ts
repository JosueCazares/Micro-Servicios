import { app } from './serve';
import {env} from './env'
//routes register
import { router as example } from './routes/example';


app.use('/api/example',example);

app.listen(env.PORT, () => {
    console.log(`Micro-Servicio API started on port ${env.PORT}`);
})