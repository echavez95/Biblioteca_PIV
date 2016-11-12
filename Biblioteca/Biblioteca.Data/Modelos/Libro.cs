using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Biblioteca.Data.Modelos
{
    public class Libro
    {
        public Libro()
        {
            this.Autores = new List<Autor>();
        }
        public int id { get; set; }
        public string nombre { get; set; }
        public int año { get; set; }
        public Editorial Editorial { get; set; }

        public IList<Autor> Autores { get; set; }

        public void agregarAutor(Autor nuevoAutor)
        {
            this.Autores.Add(nuevoAutor);
        }
    }

}
