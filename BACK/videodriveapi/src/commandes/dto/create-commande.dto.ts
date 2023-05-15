import { Client } from "src/clients/entities/client.entity"

export class CreateCommandeDto {
    pricesProducts: string[]
}
export class CommandeDto {
    client: Client;
}
