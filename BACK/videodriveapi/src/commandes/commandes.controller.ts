import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommandesService } from './commandes.service';
import { CreateCommandeDto } from './dto/create-commande.dto';
import { UpdateCommandeDto } from './dto/update-commande.dto';

@Controller('commandes')
export class CommandesController {
  constructor(private readonly commandesService: CommandesService) { }

  @Post('webhook')
  webhook(@Body() event: any) {
    const type = event.type;
    switch (type) {
      case 'payment_intent.succeeded':
        // console.log(event.data);
        break;
      case 'payment_intent.created':
        // console.log(event.data);
        break;
      case 'checkout.session.completed':
        const data = event.data.object;
        const idSession: string = data.id;
        const nom = data.custom_fields[0].text.value;
        const prenom = data.custom_fields[1].text.value;
        const email: any = data.customer_details.email;
        const customer = { nom: nom ? nom : null, prenom: prenom ? prenom : null, email: email ? email : null }
        const payment: string = data.payment_intent;
        return this.commandesService.checkAndCreatePayment(idSession, payment, customer);
    }

  }


  @Post()
  checkout(@Body() createCommandeDto: CreateCommandeDto) {
    return this.commandesService.createCheckout(createCommandeDto);
  }

  @Get()
  findAll() {
    return this.commandesService.findAll();
  }

}
