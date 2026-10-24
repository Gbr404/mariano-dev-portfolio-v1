# Portfólio — Gabriel Mariano Dourado

Site Single Page feito com HTML5, CSS3 e JavaScript puro. Não utiliza framework nem dependências de instalação.

## Executar

Com Python 3 instalado, na pasta do projeto:

```bash
python3 -m http.server 3000 --bind 0.0.0.0
```

Acesse `http://localhost:3000`. Também é possível abrir `index.html` diretamente, mas usar um servidor local evita diferenças no carregamento dos arquivos.

## Onde editar

- `index.html`: textos, seções, caminhos das mídias e links sociais (procure os `href="#"`).
- `css/styles.css`: paleta, tipografia, composição visual, animações e responsividade.
- `js/main.js`: menu de celular, revelação ao rolar, placeholders para imagens ausentes e ano automático.

## Substituir mídias

Copie seus arquivos mantendo estes caminhos (ou atualize o respectivo `src` em `index.html`):

| Conteúdo | Caminho esperado |
| --- | --- |
| Vídeo de apresentação | `video/video.mp4` |
| Áudio de apresentação | `audio/audio.mp3` |
| Imagem de destaque | `imagens/imagem.jpg` |
| Infográfico | `imagens/infografico.png` |
| Animação / motion design | `animacao/animacao.mp4` |
| Música / produção sonora | `musica/musica.mp3` |

O ícone de usuário do HERO é um SVG inline temporário; pode ser substituído por uma foto atualizando esse bloco no HTML. Os espaços de imagem mostram uma composição de placeholder até a imagem real ser adicionada.

## Estrutura

```text
index.html
css/styles.css
js/main.js
favicon.svg
manus-routes.json
video/
audio/
imagens/
animacao/
musica/
```
