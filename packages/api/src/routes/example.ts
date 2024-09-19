import { Router } from 'express';
import type { Request, Response } from 'express';
import { prisma } from '../db'
import type { APIResponse } from '../lib/types';
import type { Example } from '@prisma/client';


export const router = Router();

router.get('/', async (_: Request, res: Response) => {
    let examples = await prisma.example.findMany();

    let responseOk: APIResponse<Example[]> = {
        status: 'success',
        data: examples
    }

    return res.json(responseOk);
})

