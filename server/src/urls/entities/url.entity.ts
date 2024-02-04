import { Click } from 'src/clicks/entities/click.entity';
import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';

@Entity(`Urls`)
export class Url {

    @PrimaryColumn({
        type: `varchar`,
        unique: true
    })
    id: string;

    @Column({
        type: `varchar`
    })
    origin: string;

    @Column({
        type: `timestamptz`,
        default: () => `NOW()`
    })
    createdAt: Date;

    @Column({
        type: `timestamptz`,
        default: () => `NOW()`
    })
    updatedAt: Date;

    @OneToMany(
        () => Click,
        (clicks) => clicks.url,
        {
            onDelete: `CASCADE`
        }
    )
    clicks: Click[];
}
