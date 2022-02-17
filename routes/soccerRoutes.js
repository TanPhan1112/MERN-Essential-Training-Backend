import { addNewPlayer, getPlayers, getPlayerID, updatePlayer, deletePlayer } from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
        // GET endpoint
        .get(getPlayers)

        // POST endpoint
        .post(addNewPlayer);

    app.route('/player/:PlayerId')
        // Get specific player
        .get(getPlayerID)

        // Update a specific player
        .put(updatePlayer)

        // Delete a specific player
        .delete(deletePlayer)
}

export default routes;