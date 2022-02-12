import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
class Blog extends BaseEntity {
  @PrimaryGeneratedColumn({
    type: "integer",
    comment: "The id of the comment",
  })
  blog_id: number;

  @Column({
    type: "varchar",
    comment: "Title of the Blog",
  })
  title: string;

  @Column({
    type: "text",
    comment: "Description of the Blog",
  })
  description: string;

  @Column({
    type: "datetime",
    comment: "Creation data",
  })
  createdOn: Date;

  @Column({
    type: "datetime",
    comment: "Time of Update",
  })
  updatedOn: Date;
}

export default Blog;
