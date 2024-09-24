import { app } from './serve';
import {env} from './env'
//routes register
import { router as example } from './routes/example';
import { router as usuario } from './routes/usuario';
import { router as access } from './routes/access';


app.use('/api/example',example);
app.use('/api/usuario',usuario);
app.use('/api/access',access);

app.listen(env.PORT, () => {
    console.log(`Micro-Servicio API started on port ${env.PORT}`);
})