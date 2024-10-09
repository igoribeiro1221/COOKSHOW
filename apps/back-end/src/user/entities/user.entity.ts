import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm'
import { RecipeEntity } from '../../recipe/entities/recipe.entity'
import { RatingEntity } from '../../recipe/entities/recipe-rating.entity'

@Entity({ name: 'usuario' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ name: 'username', nullable: false })
  usuario: string

  @Column({ name: 'email', unique: true, nullable: false })
  email: string

  @Column({ name: 'senha', nullable: false })
  senha: string

  @Column({ name: 'foto_perfil', nullable: true })
  foto_perfil?: string

  @Column({ nullable: true })
  foto_id?: string

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deleted_at?: Date

  @OneToMany(() => RecipeEntity, (recipe: RecipeEntity) => recipe.user)
  receitas?: RecipeEntity[]

  @OneToMany(() => RatingEntity, (rating: RatingEntity) => rating.usuario)
  ratings?: RatingEntity[]
}
