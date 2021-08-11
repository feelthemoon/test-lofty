const getJson = async (url) => (await fetch(url)).json();

async function start() {
  try {
    const json = await getJson("/i/1.json");
    if (json.key) {
      return (await getJson("/i/2.json")).key2;
    }
    throw new Error("No key");
  } catch (error) {
    console.log(error);
  }
}
