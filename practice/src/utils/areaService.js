export async function getProvinces() {
    return await fetch("/api/citylist").then((resp) => resp.json());
}

export async function getCities(provincesId) {
    return await fetch("/api/citylist?value=" + provincesId).then((resp) =>
        resp.json()
    );
}
