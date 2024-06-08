Collezione

Punto Cartesiano

Si scriva una classe PuntoCartesiano che rappresenti un punto geometrico in coordinate cartesiane (x,y). Oltre a un costruttore, serviranno i metodi seguenti:

- p.dist(q) restituisce la distanza euclidea fra i punti p e q
- p.translate(q) sposta il punto p, traslandolo di q
- p.zero()- sposta il punto p alle coordinate (0,0)

Testo

Si progetti una classe Cineteca rappresentante un insieme di lm. Ogni lm  un oggetto avente i seguenti attributi: titolo, regista, annoUscita, volteVisto. Si pu  assumere che il titolo rappresenti univocamente un lm, ossia che non esistono due lm diversi aventi lo stesso titolo.

- c.add(titolo, regista, anno) Il metodo aggiunge il lm alla cineteca e restituisce il numero totale dopo l aggiunta.
- c.remove(titolo) Il metodo rimuove il lm, se presente, e restituisce il numero di  lm dopo l operazione. Il numero va comunque restituito anche in caso non sia possibile rimuovere alcun lm)
- c.count() Numero di lm presenti nella cineteca.
- c.vedi(titolo) Se il lm  presente, incrementa di uno il suo numero di visualizzazioni e restituisce il numero di visualizzazioni totale; altrimenti, restituisce -1.

Esempio

c = new Cineteca();

c.add("Il Signore degli Anelli", "Peter Jackson", 2001) -> 1 c.add("Guida galattica per autostoppisti", "Garth Jennings", 2005) -> 2 c.vedi("Il Signore degli Anelli") -> 1

c.vedi("Il Signore degli Anelli") -> 2

c.add("Spaceballs", "Mel Brooks", 1987) -> 3

c.remove("Il nome della rosa") -> 3

c.count() -> 3

Testo

Si scriva una classe Collezione che rappresenta una struttura dati astratta. Oltre al costruttore, la classe deve de nire i metodi:

- occurrences(o) che restituisce il numero di occorrenze di o.
- len() che restituisce il numero di elementi presenti nella struttura dati.
- isEmpty() che restituisce true se la struttura dati  vuota, false altrimenti.

In ne si specializzino le classi Coda e Pila che implementano i metodi:

- add(o) che aggiunge l elemento alla collezione.
- remove() che rimuove l elemento dalla collezione e lo restituisce.

Nel caso di Coda l elemento rimosso  il primo inserito (FIFO), mentre nel caso di Pila l elemento rimosso  l ultimo inserito (LIFO). Si de nisca in ne una funzione mediaCollezioni che data una lista di collezioni restituisce la loro lunghezza media, indipendentemente dall implementazione.

13
Collezione

Esempi

c=new Coda() c.add(1)

c.add(2) c.add(3) c.remove() -> 1

p = new Pila() p.add(1) p.add(2) p.add(3) p.remove() -> 3 p.remove() -> 2

mediaCollezioni([c,p]) -> 2

14
Animali

Si riproduca la tassonomia in gura come una gerarchia di classi. Ogni classe dovr  implementare almeno un costruttore,

che dato il nome e l et  dell animale costruisce l oggetto. Canino Inoltre, de nire nelle classi appropriate i metodi: abbaia,![](Aspose.Words.69ba20e0-0946-4914-b9e0-07b3d9854190.001.png)![](Aspose.Words.69ba20e0-0946-4914-b9e0-07b3d9854190.002.png)

bevi, mangia, ulula. Ognuno di questi aggiorna lo stato

Lupo Cane interno dell animale, incrementando un contatore

num\_actions che indica il numero di azioni eseguite. Pitbull![](Aspose.Words.69ba20e0-0946-4914-b9e0-07b3d9854190.003.png)![](Aspose.Words.69ba20e0-0946-4914-b9e0-07b3d9854190.004.png) Labrador Si scriva in ne una funzione contaAzioni, che data una lista

di animali e un riferimento a una classe, restituisce la somma del numero di azioni compiute dagli animali istanza della classe.

16
Animali

Esempio:

p = new Pitbull("Fido", 2);

l = new Labrador("Britta", 3); w = new Lupo("Pippo", 5);

p.abbaia() p.mangia() l.bevi() w.mangia() w.ulula()

contaAzioni([p, l, w], Cane) -> 3
17
