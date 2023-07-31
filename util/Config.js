const Config = {
    //Em produção trocar local host pelo IP de onde está rodando o sevidor do back-end
    API_URL: "http://localhost:3000/",
    TIMEOUT_REQUEST: 5000,
    HEADER_REQUEST: {
        Accept: 'application/json'
    }
}
export default Config;