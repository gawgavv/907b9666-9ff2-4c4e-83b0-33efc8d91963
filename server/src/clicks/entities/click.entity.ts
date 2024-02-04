import { Url } from 'src/urls/entities/url.entity';
import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne, JoinColumn } from 'typeorm';

@Entity(`Clicks`)
export class Click {

    @PrimaryGeneratedColumn(`increment`)
    id: number;

    @Index({
        unique: true
    })
    @Column({
        type: `varchar`,
        length: 7
    })
    urlId: string;

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

    @ManyToOne(
        () => Url,
        (url) => url.clicks
    )
    @JoinColumn({
        name: `urlId`,
        foreignKeyConstraintName: `ClickForeignKeyOnUrl`
    })
    url: Url;
}
