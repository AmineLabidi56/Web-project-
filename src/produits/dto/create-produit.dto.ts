import { ApiProperty } from '@nestjs/swagger';

export class CreateProduitDto {
  @ApiProperty({ description: 'The name of the product' })
  name: string;

  @ApiProperty({ description: 'The description of the product' })
  description: string;

  @ApiProperty({ description: 'The price of the product' })
  price: number;

  @ApiProperty({ description: 'The quantity of the product' })
  quantity: number;
}