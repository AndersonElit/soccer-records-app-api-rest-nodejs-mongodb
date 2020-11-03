import { Router } from 'express';
const router = Router();

//Database connection
import { connect } from '../database'
import { ObjectID } from 'mongodb'

router.get('/', async (req, res) => {
    const db = await connect();
    const result = await db.collection('premier_league').find({}).toArray();
    res.json(result);
})

router.post('/', async (req, res) => {
    const db = await connect();
    const league_name = req.body.league;
    
    const temp = {
        temp: req.body.temp,
        teams: req.body.teams,
        dates: req.body.dates
    }
    
    const result = await db.collection(league_name).insertOne(temp);
    res.json(result.ops[0]);
    
})

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('leagues').findOne({_id: ObjectID(id)})
    console.log(id);
    res.json(result);
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    const db = await connect();
    const result = await db.collection('leagues').deleteOne({_id: ObjectID(id)});
    res.json({
        message: 'item con ${id} eliminado',
        result
    })
})

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const updateLeague = {
        temp: req.body.temp,
        team: req.body.team
    };
    const db = await connect();
    await db.collection('leagues').updateOne({_id: ObjectID(id)}, { $set: updateLeague });
    res.json({
        message: 'League ${id} updated'
    })
})

export default router;