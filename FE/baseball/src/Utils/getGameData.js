import { getAPI } from "@/Utils/API"

const getGameData = async (apiName, gameId, setDataFn, setErrorFn) => {
	await getAPI[apiName](gameId)
		.then((res) => {
			if (res && res.data) { setDataFn(res.data); }
			else throw Error();
		})
		.catch((err) => setErrorFn(err));
}

export default getGameData