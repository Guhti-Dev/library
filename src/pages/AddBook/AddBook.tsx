import './index.css'

export default function AddBook() {
    return (
        <div className='add-book-Form'>
            <h1>Adicionar Livro</h1>
            <form>
                <div>
                    <label>Título:</label>
                    <input type="text" id="title" name="title" required />
                </div>
                <div>
                    <label>Autor:</label>
                    <input type="text" id="autor" name="autor" required />
                </div>
                <div>
                    <label>Ano:</label>
                    <input type="number" id="year" name="year" required />
                </div>
                <div>
                    <label>Gênero:</label>
                    <input type="text" id="genre" name="genre" />
                </div>
                <div>
                    <label>Avaliação:</label>
                    <input type="number" id="rating" name="rating" min="0" max="5" />
                </div>
                <div>
                    <label>Imagem (URL):</label>
                    <input type="url" id="image" name="image" />
                </div>
                <div>
                    <label>Descrição:</label>
                    <input type="text" id="description" name="description" />
                </div>
                <div>
                    <label>Link:</label>
                    <input type="url" id="link" name="link" />
                </div>
                <button type="submit">Adicionar Livro</button>
            </form>

        </div>
    );
}