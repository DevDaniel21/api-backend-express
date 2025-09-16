export const logger = (req, res, next) => {
    // mostrar a data e horario de sao paulo
    console.log(`${req.method} ${req.originalUrl} ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}`);
    next();
}