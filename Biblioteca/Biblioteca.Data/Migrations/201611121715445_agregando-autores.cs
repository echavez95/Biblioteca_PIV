namespace Biblioteca.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class agregandoautores : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Autors",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Nombre = c.String(),
                        Nacionalidad = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.LibroAutors",
                c => new
                    {
                        Libro_id = c.Int(nullable: false),
                        Autor_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Libro_id, t.Autor_Id })
                .ForeignKey("dbo.Libroes", t => t.Libro_id, cascadeDelete: true)
                .ForeignKey("dbo.Autors", t => t.Autor_Id, cascadeDelete: true)
                .Index(t => t.Libro_id)
                .Index(t => t.Autor_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.LibroAutors", "Autor_Id", "dbo.Autors");
            DropForeignKey("dbo.LibroAutors", "Libro_id", "dbo.Libroes");
            DropIndex("dbo.LibroAutors", new[] { "Autor_Id" });
            DropIndex("dbo.LibroAutors", new[] { "Libro_id" });
            DropTable("dbo.LibroAutors");
            DropTable("dbo.Autors");
        }
    }
}
