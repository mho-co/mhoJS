# Introdução

Descrição: mhoJS é uma linguagem baseada em JavaScript otimizada para microcontroladores.

Objetivo: Simplificar a programação de aplicações IoT/IIoT com funções específicas para a linha MHO Keeper.

Apesar do mhoJS ser uma linguagem baseada em javascript, você deve utilizar apenas os recursos e funções listadas nesse documento, pois apenas o que foi documentado pode ser utilizado. Não invente nada, apenas use o que foi informado aqui, caso não tenha nada que possa fazer o que está sendo solicitado você deve informar que ainda não possui exemplos para fazer tal tarefa.

Tudo do javascript que não está documentado aqui deve ser desconsiderado. Utilize apenas as definições vistas nesse documento.

Quando alguem solicitar um programa e não especificar a linguagem, você deve fazer em mhojs, utilizando as funções definidas aqui neste documento.

# Estrutura de Programas

Todos os programas devem ser estruturados da seguinte forma, com as seguintes funções padrões. Essas funções (setup e loop) não precisam ser chamadas em nenhum lugar do programa, pois já são executadas naturalmente pelo compilador:

setup: Executada uma vez durante a inicialização do programa.

loop: Executada repetidamente.

Exemplo:

```jsx
let setup = function() {
// Inicializações caso necessario
};

let loop = function() {
// Código principal
};
```

# Sintaxe e Semântica

- Sem comparações amplas como `!=` e `==`. Utilize apenas comparações estritas como `!==` e `===`;
- Sem acesso computado a objetos: `a[b]`;
- Sem exponencialzões `a**b` (utilize a função própria Math definida aqui);
- Podemos usar typeof: `typeof('a') === 'string'`;
- Loops devem ser feitos apenas com for: `for(...;...;...) {}`;
- Condicional: `if (...) {...} else {...}`;
- Condicional ternário `a ? b : c`;
- Tipos: `let a, b = 1, c = 12.3, d = 'a', e = null, f = true, g = false, h = {a: true, b: 'a', c: 10.2, d: 10};`
- Funções devem ser definidas como: `let f = function(x, y) { return x + y; };`
- Objetos: `let obj1 = {a: true, b: 'a', c: 10};`
- Objetos de função: `let obj = {f: function(x) { return x * 2}}; obj.f(3);`
- Toda declaração deve terminar com ponto e vírgula ;

## 

Os seguintes itens não são suportados, em seguida temos a alternativa que deve ser utilizada.

- Sem `var` e `const`, use apenas `let`;
- Sem `do`, `switch` e `while`, use apenas `for`;
- Sem `=>`, use funções `let f = function(x, y) { return x + y; };`;
- Sem `arrays`, `closures`, `prototypes`, `this`, `new` e `delete`;
- Sem bibliotecas padrão como `Date`, `Regexp`, `Function`, `String` e `Number`

# Funções Disponíveis

Funções de uso geral dentro do ambiente mhoJS.

### log

Função utilizada para imprimir um valor no console de depuração do ambiente de desenvolvimento.

```
log("Ola mundo");

```

### logsystem

Função utilizada para imprimir o uso de recursos no console de depuração do ambiente de desenvolvimento [code.mhoeng.com](http://code.mhoeng.com/)

```
logsystem();

```

### delay

Função utilizada para delay em milissegundos no código. Útil para depuração.

```
delay(1000);

```

### version

Função utilizada para definir a versão do código mhoJS. Útil para versionamento dos códigos. A versão do arquivo pode ser requisitada posteriormente pela nuvem.

```
version(1);

```

### include

include Adiciona arquivo `.js`. Útil para estruturação de programas em mais de um arquivo ou utilização de bibliotecas mhoJS. As variável globais são compartilhadas entre os arquivos, não é permitido redefinição.

```
include(path);

```

Exemplo:

```
include("/js/myfile.js");

```

## sys

Funções de configurações gerais do sistema, definidas também via webserver.

Utilize para criar grandes sistemas padronizados ou em sistema produzidos em série, para não precisar alterar as configurações no webserver.

### sys.save

Salva os parâmetros alterados na memória retentiva.

```
sys.save();

```

### sys.di_ticks

Define as quantidades de ticks de processamento para mudança de estado das entradas digitais.

```
sys.di_ticks(ticks);

```

### sys.reboot

Reinicia o equipamento.

```
sys.reboot();

```

### sys.rs485

Define as configurações da porta RS485.

```
sys.rs485(com, baud, resistor);

```

Onde:

- com: Dados da porta COM;
- baud: Velocidade;
- resistor: Habilita ou desabilita o resistor de terminação.

**Exemplo:**

```
sys.rs485('8N1', 9600, false);

```

### sys.mbrtu

Define as configurações do Modbus rtu.

```
sys.mbrtu(MBqnt, MIqnt, MIperiod);

```

Onde:

- MBqnt: Quantidade de MBs para envio ao servidor;
- MIqnt: Quantidade de MIs para envio ao servidor;
- MIperiod: tempo em segundos para atualizar as MIs.

**Exemplo:**

```
sys.mbrtu(0, 2, 120);

```

### sys.mbrtu_server

Define as configurações do Modbus RTU modo server. Caso seja habilitado, o modo client também é desabilitado.

```
sys.mbrtu_server(hab, serverID);

```

Onde:

- hab: Habilita ou desabilita o modo server;
- serverID: Endereço desse equipamento na rede Modbus no modo server.

**Exemplo:**

```
sys.mbrtu_server(true, 1);

```

### sys.mbrtu_client

Define as configurações do Modbus RTU modo client. Caso seja habilitado, o modo server também é desabilitado.

```
sys.mbrtu_client(hab);

```

Onde:

- hab: Habilita ou desabilita o modo client. **Exemplo:**

```
sys.mbrtu_client(true);

```

## parseInt

Recebe uma string e retorna um número inteiro. Caso a string não seja válida é retornado 0.

```
parseInt(string);

```

Exemplo:

```
parseInt("55");

```

Resposta: `55` (type number)

## parseFloat

Recebe uma string e retorna um número com precisão. Caso a string não seja válida é retornado 0.

```
parseFloat(string);

```

Exemplo:

```
parseFloat("55.5");

```

Resposta: `55.5` (type number)

## toString

Recebe um número e retorna uma string, podendo esse número ser convertido para hexadecimal ou binário.

Opção 1, trabalhando com números `double`:

```
toString(double, decimalPlaces = 2);

```

Exemplo 1:

```
toString(10);

```

Resposta: `"10.00"`

Exemplo 2:

```
toString(10.12345, 1);

```

Resposta: `"10.1"`

Opção 2, trabalhando com números `inteiros`:

```
toString(int, mode);

```

Sendo mode:

- 'BIN': para binário;
- 'OCT': para octal;
- 'DEC': para decimal.
- 'HEX': para hexadecimal.

Exemplo 1:

```
toString(100, 'BIN');

```

Resposta: `"1100100"`

Exemplo 2:

```
toString(100, 'HEX');

```

Resposta: `"64"`

## substring

Recebe uma string e retorna uma substring.

```
substring(string, inicio, fim = lastCaracter);

```

Exemplo 1:

```
substring("Isso aqui eh uma string", 10);

```

Resposta: `"eh uma string"`

Exemplo 2:

```
substring("Isso aqui eh uma string", 10, 16);

```

Resposta: `"eh uma"`

## length

Retorna a quantidade de caracteres de uma string.

```
length(string);

```

Exemplo:

```
length("Isso aqui eh uma string");

```

Resposta: `23`

## rtc

Grupo de funções utilizado para manipular o RTC e os dados de relógio do equipamento. Função global utilizada para utilizar o relógio em tempo real RTC (*Real Time Clock*). Com ele é possível saber o valor do relógio interno nesse momento e funções de verificação relacionado a data e horários.

FUSO HORÁRIO: Os dias e horários são exibidos e configurados conforme o fuso horário configurado no webserver do equipamento.

DESCRIÇÃO DAS VARIÁVEIS: Durante essa página serão utilizados algumas variáveis para descrever os métodos e respostas das funções. Veja abaixo a descrição dessas variáveis.

| Variável | Descrição | tipo | Range |
| --- | --- | --- | --- |
| h | hora | int | 0 a 23 |
| min | minuto | int | 0 a 59 |
| s | segundo | int | 0 a 59 |
| d | dia | int | 0 a 31 |
| mon | mês | int | 1 a 12 |
| y | ano | int | 2000 a 2099 |
| wd | dia da semana | int | 1 a 7 |
| yd | dia do ano | int | 1 a 366 |
| ts | unix timestamp [s] | int | 0 a 1.8446744e+19 |

### rtc.now

Retorna o valor atual do horário.

```
rtc.now(str);

```

Resposta: `obj`

**Possíveis valores**

| Entrada "str" | Descrição | Resposta obj |
| --- | --- | --- |
| "t" | Retorna horário atual | `{h, min, s}` |
| "d" | Retorna data atual | `{d, mon, y, wd, yd}` |
| "ts" | Retorna timestamp atual | `ts` |

### Exemplo

Caso os comandos fossem solicitados no dia 04/jan/2023 as 12:30:15 (GMT -3) as respostas seriam da seguinte forma:

- time
- date
- timestamp

```
rtc.now("t");

```

Resposta: `{h: 12, min: 30, s: 15}`

### rtc.lastchange

Retorna o tempo que passou desde a última mudança de estado de uma variável binária em relação a um valor específico. Também retorna o timestamp que ocorreu tal mudança.

> Necessita de objeto global para guardar respostas. let aux = {"since": -1, "past": 0};
> 

```
aux = rtc.lastchange(state, boolreference, aux.since, aux.past);

```

Resposta: objeto `{"since": timestamp, "past": timePassed}`

### Exemplo

Precisamos saber quanto tempo uma variável binária está com seu estado em `false`.

- Genérico
- Entrada Analógica

> Você pode utilizar qualquer valor booleano.
> 

```
let aux = {"since": -1, "past": 0};

let loop = function() {
    aux = rtc.lastchange(myVar, false, aux.since, aux.past);
    log(aux);
    delay(1000);
};

```

Resposta: `{"since": 1697560430, "past": 1209}` Nesse caso se passaram 1209 segundos desde que o valor booleano foi para false.

### rtc.isnow

Retorna se hora e dia atual são iguais a entrada da função.

```
rtc.isnow(d, mon, y, h, min);

```

Resposta: `true/false`

### Exemplo

Caso os comandos fossem solicitados no dia 05/jan/2023 as 12:30:15 as respostas seriam da seguinte forma:

```
rtc.isnow(5, 1, 2023, 12, 30);

```

Resposta: `true`

### rtc.isnow_time

Retorna se hora atual é igual a entrada da função.

```
rtc.isnow_time(h, min);

```

Resposta: `true/false`

### Exemplo

Caso os comandos fossem solicitados em qualquer dia as 12:30:15 as respostas seriam da seguinte forma:

```
rtc.isnow_time(12, 30);

```

Resposta: `true`

### rtc.isnow_date

Retorna se a data atual é igual a entrada da função. Caso o ano não seja informado a função considera que pode ser o ano atual do equipamento.

```
rtc.isnow_date(d, mon, y = this_year);

```

Resposta: `true/false`

### Exemplo

Caso os comandos fossem solicitados no dia 05/jan/2023 a resposta seria da seguinte forma:

```
rtc.isnow_date(5, 1, 2023);

```

Resposta: `true`

```
rtc.isnow_date(5, 1);

```

Resposta: `true`

```
rtc.isnow_date(5, 1, 2025);

```

Resposta: `false`

### rtc.isnow_x

Retorna se a variavel atual é igual a entrada da função.

```
rtc.isnow_x(str, int);

```

Resposta: `true/false`

**Possíveis valores**

| Entrada str | Entrada int |
| --- | --- |
| "h" | 0-23 |
| "min" | 0-59 |
| "d" | 1-31 |
| "mon" | 1-12 |
| "y" | 2000-2099 |
| "wd" | 1-7 |
| "yd" | 1-366 |

### Exemplo

Caso o comando fosse solicitado em qualquer horário de uma quarta feira a resposta seria da seguinte forma:

```
rtc.isnow_date("wd", 4);

```

Resposta: `true`

### rtc.millis

Retorna o tempo de execução em millisegundos desde que o processador foi inicializado (reseta em uInt64). Útil para utilização em lógicas de tempo.

```
rtc.millis();

```

Resposta: `Tempo em millisegundos`

### rtc.seconds

Retorna o tempo de execução em segundos desde que o processador foi inicializado (reseta em uInt64/1000). Útil para utilização em lógicas de tempo.

```
rtc.seconds();

```

Resposta: `Tempo em segundos`

## Timestamp

Função global utilizada para manipular os valores tempo no formato de unix timestamp e padrão humano. Pode criar um timestamp a partir de uma uma entrada de tempo no padrão humano, seja ela atual, passada ou futura.

### ts.mk

Cria um timestamp a partir de uma entrada de data e horário.

```
ts.mk(d, mon, y, h, min, s=0);

```

Resposta: `unixtimestamp em segundos`

### Exemplo

Caso a entrada solicitada fosse 05/jan/2023 as 12:30:15 a resposta seria da seguinte forma:

```
ts.mk(5, 1, 2023, 12, 30, 15);

```

Resposta: `1672932615` *(Thu Jan 05 2023 12:30:15 GMT-0300 (Horário Padrão de Brasília))*

### ts.when

Retorna uma data no formato humano a o partir de um timestamp.

```
ts.when(ts);

```

Resposta: `{d, mon, y, h, min}`

### Exemplo

Caso a entrada solicitada fosse o timestamp 1672932615 a resposta seria da seguinte forma:

```
ts.when(1672932615);

```

Resposta: `{d: 5, mon: 1, y: 2023, h: 12, min: 30}` *(Thu Jan 05 2023 12:30:15 GMT-0300 (Horário Padrão de Brasília))*

### ts.when_ms

Retorna uma data no formato humano a o partir de um `timestamp em ms` com opção de usar a referencia de fuso horário local ou não usar.

```
ts.when_ms(ts, useLTz = true);

```

onde:

- ts: timestamp em milissegundos;
- useLTz: Utilizar ou não o fuso horário do local do equipamento:
    - `false`: considera o timestamp sem referência de hora local (horário UTC+0);
    - `true`: considera o timestamp do equipamento referência de hora local (horário UTC+fuso), ou seja caso o equipamento esteja instalado em um lugar com horário de brasília será considerado o horário UTC-3h;

Resposta: `{d, mon, y, h, min}`

### Exemplo

Caso a entrada solicitada fosse o timestamp 1672932615000 a resposta seria da seguinte forma:

```
ts.when_ms(1672932615000, false);

```

Resposta: `{d: 5, mon: 1, y: 2023, h: 15, min: 30}` *(Thu Jan 05 2023 15:30:15 GMT*

### ts.when_x

Retorna uma variável da data no formato humano a o partir de um timestamp.

```
ts.when_x(str, ts);

```

Resposta: `d/mon/y/h/min`

### Exemplo

Caso a entrada solicitada fosse o dia do timestamp 1672932615 a resposta seria da seguinte forma:

```
ts.when("d", 1672932615);

```

Resposta: `5` *(Thu Jan 05 2023 12:30:15 GMT-0300 (Horário Padrão de Brasília))*

Caso a entrada solicitada fosse o ano do timestamp 1672932615 a resposta seria da seguinte forma:

```
ts.when("y", 1672932615);

```

Resposta: `2023` *(Thu Jan 05 2023 12:30:15 GMT-0300 (Horário Padrão de Brasília))*

### ts.h

Retorna o timestamp para uma variação de horas em relação ao momento atual com os minutos fixados (padrão é 59).

```
ts.h(int, min = 59);

```

Resposta: `ts`

### Exemplo

- *Caso o momento atual fosse 05/jan/2023 as 12:30:15 e fosse solicitado o valor do timestamp de duas horas atras em relação ao horário atual resposta seria da seguinte forma: **

```
ts.h(-2);

```

Resposta: `1672927140` *Thu Jan 05 2023 10:59:00 GMT-0300 (Horário Padrão de Brasília)*

**Com minuto fixado em 00 minutos:**

```
ts.h(-2, 0);

```

Resposta: `1672923600` *Thu Jan 05 2023 10:00:00 GMT-0300 (Horário Padrão de Brasília)*

- *Caso nesse mesmo momento fosse solicitado o valor do timestamp de duas horas para frente em relação ao horário atual resposta seria da seguinte forma: **

```
ts.h(2);

```

Resposta: `1672941540` *Thu Jan 05 2023 14:59:00 GMT-0300 (Horário Padrão de Brasília)*

### ts.d

Retorna o timestamp para uma variação de dias em relação ao momento atual com a hora e minuto fixados (padrão é 23:59).

```
ts.d(int, h=23, min = 59);

```

Resposta: `ts`

### Exemplo

- *Caso o momento atual fosse 05/jan/2023 as 12:30:15 e fosse solicitado o valor do timestamp de dois dias atras em relação ao horário atual resposta seria da seguinte forma: **

```
ts.d(-2);

```

Resposta: `1672801140` *Tue Jan 03 2023 23:59:00 GMT-0300 (Horário Padrão de Brasília)*

**Com hora e minutos fixado em 12:00:**

```
ts.d(-2, 12, 0);

```

Resposta: `1672758000` *Tue Jan 03 2023 12:00:00 GMT-0300 (Horário Padrão de Brasília)*

- *Caso nesse mesmo momento fosse solicitado o valor do timestamp de dois dias para frente em relação ao horário atual resposta seria da seguinte forma: **

```
ts.h(2);

```

Resposta: `1673146740` *Sat Jan 07 2023 23:59:00 GMT-0300 (Horário Padrão de Brasília)*

### ts.mon

Retorna o timestamp para uma variação de meses em relação ao momento atual com o dia, hora e minuto fixados (padrão é último dia do mês as 23:59).

```
ts.mon(int, d=last, h=23, min = 59);

```

Resposta: `ts`

### Exemplo

- *Caso o momento atual fosse 05/jan/2023 as 12:30:15 e fosse solicitado o valor do timestamp de dois meses atras em relação ao horário atual resposta seria da seguinte forma: **

```
ts.mon(-2);

```

Resposta: `1669863540` *Wed Nov 30 2022 23:59:00 GMT-0300 (Horário Padrão de Brasília)*

**Com dia, hora e minutos fixado em dia 01 as 12:00:**

```
ts.mon(-2, 1, 12, 0);

```

Resposta: `1667314800` *Tue Nov 01 2022 12:00:00 GMT-0300 (Horário Padrão de Brasília)*

- *Caso nesse mesmo momento fosse solicitado o valor do timestamp de dois meses para frente em relação ao momento atual resposta seria da seguinte forma: **

```
ts.mon(2);

```

Resposta: `1680317940` *Fri Mar 31 2023 23:59:00 GMT-0300 (Horário Padrão de Brasília)*

### ts.w

Retorna o timestamp para uma variação de semanas em relação ao momento atual com o dia da semana, hora e minuto fixados (padrão é último sábado as 23:59).

```
ts.w(int, wd=last, h=23, min = 59);

```

Resposta: `ts`

### Exemplo

- *Caso o momento atual fosse 05/jan/2023 as 12:30:15 e fosse solicitado o valor do timestamp de duas semanas atras em relação ao momento atual, a resposta seria da seguinte forma: **

```
ts.w(-2);

```

Resposta: `1671937140` *Sat Dec 24 2022 23:59:00 GMT-0300 (Horário Padrão de Brasília)*

**Com dia da semana, hora e minutos fixado em domingo as 12:00:**

```
ts.w(-2, 1, 12, 0);

```

Resposta: `1671377220` *Sun Dec 18 2022 12:27:00 GMT-0300 (Horário Padrão de Brasília)*

- *Caso nesse mesmo momento fosse solicitado o valor do timestamp de duas semanas para frente em relação ao momento atual, a resposta seria da seguinte forma: **

```
ts.w(2);

```

Resposta: `1674356340` *Sat Jan 21 2023 23:59:00 GMT-0300 (Horário Padrão de Brasília)*

### ts.y

Retorna o timestamp para uma variação de anos em relação ao momento atual com o dia, mês, hora e minuto fixados (padrão é 31 de dezembro as 23:59).

```
ts.y(int, d=31, mon=12 , h=23, min = 59);

```

Resposta: `ts`

### Exemplo

- *Caso o momento atual fosse 05/jan/2023 as 12:30:15 e fosse solicitado o valor do timestamp de duas semanas atras em relação ao momento atual, a resposta seria da seguinte forma: **

```
ts.y(-2);

```

Resposta: `1641005940` *Fri Dec 31 2021 23:59:00 GMT-0300 (Horário Padrão de Brasília)*

## io

Função global utilizada para realizar leitura e controle das IOs (DIs, DOs, AIs e AOs).

### io.readDI

Retorna o status booleano da entrada digital solicitada.

```
io.readDI(DI);

```

Resposta: `true/false`

### Exemplo

Saber o status booleano na entrada digital 2 (DI2):

```
io.readDI(2);

```

Resposta: `true` (nível lógico alto / em 1) ou `false` (nível lógico baixo / em 0) .

### io.readDO

Retorna o status booleano da saída digital solicitada. Caso precise ler o status da saída de erro, o valor `-1` corresponde a saída de erro 1 e o valor `-2` a saída de erro 2.

```
io.readDO(DO);

```

Resposta: `true/false`

### Exemplo

Saber o status booleano na saída digital 3 (DO3):

```
io.readDO(3);

```

Resposta: `true` (nível lógico alto / em 1) ou `false` (nível lógico baixo / em 0) .

### io.setDO

Seta o status booleano da saída digital solicitada. Caso precise comandar a saída de erro, o valor `-1` corresponde a saída de erro 1 e o valor `-2` a saída de erro 2.

```
io.setDO(DO, value);

```

Resposta: `true/false`

### Exemplo

Comutar a saída digital 4 (DO4) para nível lógico alto (em 1):

```
io.setDO(4, true);

```

Resposta: Responde se o comando foi aceito (`true`) ou o comando foi recusado (`false`) devido a presença da variável de controle das DOs.

### io.readAI

Retorna o valor lido na entrada analógica solicitada na escala de real já interpolada, de acordo com o tipo de sinal de entrada.

```
io.readAI(AI, mode, y0, y1);

```

| mode | Descrição |
| --- | --- |
| "i" | entrada de corrente 4-20 mA |
| "i1" | entrada de corrente 0-20 mA |
| "v" | entrada de tensão 0-10 V |
| "v1" | entrada de tensão 2-10 V |
| "v2" | entrada de tensão 0-5 V |
| "v3" | entrada de tensão 1-5 V |
| "v4" | entrada de tensão 0-3.3 V |

Resposta: `float` em escala real de acordo com os parâmetros de entrada configurados para interpolação linear.

### Exemplo

Saber o valor em escala real para um sensor conectado na entrada analógica 1 (AI1).

*Características do sensor* Modo: corrente 4-20 mA; Escala: conversão 0 a 10 unidades reais (exemplo 0 a 10 metros).

```
io.readAI(1, 'i', 0, 10);

```

Resposta: `float` interpolado para escala do sensor.

### io.readAIraw

Retorna o valor lido na entrada digital solicitada na escala de engenharia.

```
io.readAIraw(AI);

```

Resposta: `int` em escala de engenharia (8 bits ou 12 bits conforme modelo)

*Para mais informações sobre a escala de engenharia consultar guia de escala das variáveis analógicas*

### io.do_lastchange

Retorna o tempo em segundos desde a última mudança do status da entrada digital solicitada.

```
io.do_lastchange(DO, status = any);

```

Resposta: `int` tempo em segundos desde a última mudança.

O parâmetro status é um parâmetro booleano opcional para indicar qual o status deve ser retornado. Por exemplo, se o interesse for só pelo status de tempo da saída digital em true, o parâmetro só vai retornar o tempo desde a última mudança se a saída digital estiver em true.

### Exemplo 1

Saber o tempo desde que a saída digital foi comutada, sem se importar se o status atual dela é `true/false`.

```
io.do_lastchange(1);

```

Resposta: `int` tempo desde que a saída digital foi comutada.

### Exemplo 2

Saber o tempo desde que a saída digital foi comutada, mas somente se a respectiva saída digital estiver em `true`.

```
io.do_lastchange(1, true);

```

Resposta: `int` caso a saída digital esteja em false será retornado `0`. Caso a saída digital esteja em `true` será retornado o tempo desde que a saída digital foi comutada (nesse caso de `false` para `true`).

## di

Função global utilizada para realizar leitura de dados obtidos através da entradas digitais (DIs).

### di.setDIcicles

Seta o número de ticks do processador para considerar uma mudança de status da entrada digital. O mesmo parâmetro definido em webserver. Essa função deve ser chamada na inicialização do programa.

```
di.setDIcicles(ticks);

```

### di.lastchange

Retorna o tempo em segundos desde a última mudança do status da entrada digital solicitada.

```
di.lastchange(DI, status = any);

```

Resposta: `int` tempo em segundos desde a última mudança.

O parâmetro status é um parâmetro booleano opcional para indicar qual o status deve ser retornado. Por exemplo, se o interesse for só pelo status de tempo da entrada digital em true, o parâmetro só vai retornar o tempo desde a última mudança se a entrada digital estiver em true.

### Exemplo 1

Saber o tempo desde que a entrada digital foi comutada, sem se importar se o status atual dela é `true/false`.

```
di.lastchange(1);

```

Resposta: `int` tempo desde que a entrada digital foi comutada.

### Exemplo 2

Saber o tempo desde que a entrada digital foi comutada, mas somente se a respectiva entrada digital estiver em `true`.

```
di.lastchange(1, true);

```

Resposta: `int` caso a entrada digital esteja em false será retornado `0`. Caso a entrada digital esteja em `true` será retornado o tempo desde que a entrada digital foi comutada (nesse caso de `false` para `true`).

### di.timer

Retorna o horímetro em segundos desde o último reset do contador da respectiva entrada digital. Tanto o contador de nível alto quanto o de nível baixo registram o tempo considerando o tempo que o equipamento ficou ligado, desconsiderando o tempo que o equipamento não esteve energizado.

```
di.timer(DI, status = true);

```

Resposta: `int` tempo em segundos desde o último reset do contador.

### Exemplo 1

Retornar o tempo do horímetro em nível alto na entrada digital 1.

```
di.timer(1, true);

```

Resposta: `int` tempo em segundos que a entrada digital 1 ficou em `high` desde o último reset.

### Exemplo 2

Retornar o tempo do horímetro em nível baixo na entrada digital 1.

```
di.timer(1, false);

```

Resposta: `int` tempo em segundos que a entrada digital 1 ficou em `low` desde o último reset.

### di.timer_m

Retorna o horímetro em minutos, basicamente a mesma função `di.timer` divido por 60 para a resposta ser em minutos.

```
di.timer_m(DI, status = true);

```

Resposta: `double` tempo em minutos desde o último reset do contador.

### Exemplo 1

Retornar o tempo do horímetro em nível alto na entrada digital 1.

```
di.timer_m(1, true);

```

Resposta: `double` tempo em minutos que a entrada digital 1 ficou em `high` desde o último reset.

### Exemplo 2

Retornar o tempo do horímetro em nível baixo na entrada digital 1.

```
di.timer_m(1, false);

```

Resposta: `double` tempo em minutos que a entrada digital 1 ficou em `low` desde o último reset.

### di.timer_h

Retorna o horímetro em horas, basicamente a mesma função `di.timer` divido por 3600 para a resposta ser em minutos.

```
di.timer_h(DI, status = true);

```

Resposta: `double` tempo em horas desde o último reset do contador.

### Exemplo 1

Retornar o tempo do horímetro em nível alto na entrada digital 1.

```
di.timer_h(1, true);

```

Resposta: `double` tempo em horas que a entrada digital 1 ficou em `high` desde o último reset.

### Exemplo 2

Retornar o tempo do horímetro em nível baixo na entrada digital 1.

```
di.timer_h(1, false);

```

Resposta: `double` tempo em horas que a entrada digital 1 ficou em `low` desde o último reset.

### di.timer_adjust

Altera o valor salvo no registrador do horímetro em segundos.

ATENÇÃO

Essa função escreve na memória retentiva do equipamento, não utilize ela em escritas repetidas exaustivas pois isso afeta a vida útil da memória retentiva.

```
di.timer_adjust(DI, value, status = true);

```

Resposta: `true/false`.

### Exemplo 1

Ajustar o tempo do horímetro em nível alto na entrada digital 1 para o valor 0.

```
di.timer_adjust(1, 0, true);

```

Resposta: `true/false`.

### Exemplo 2

Ajustar o tempo do horímetro em nível baixo na entrada digital 1 para o valor 0.

```
di.timer_adjust(1, 0, false);

```

Resposta: `true/false`.

### di.pulse

Retorna a contagem de pulsos acumulados desde o último reset do contador da respectiva entrada digital solicitada.

```
di.pulse(DI);

```

Resposta: `int` contagem de pulsos desde o último reset do contador.

### Exemplo

Verificar a contagem de pulsos do contador na DI1.

```
di.pulse(1);

```

Resposta: `int` contagem de pulsos desde o último reset do contador.

### di.pulse_adjust

Altera o valor salvo no registrador do contador de pulsos.

ATENÇÃO

Essa função escreve na memória retentiva do equipamento, não utilize ela em escritas repetidas exaustivas pois isso afeta a vida útil da memória retentiva.

```
di.pulse_adjust(DI, value);

```

Resposta: `true/false`.

### Exemplo 1

Ajustar o contador de pulsos da entrada digital 1 para o valor 0.

```
di.pulse_adjust(1, 0);

```

Resposta: `true/false`.

## mbc

Função global utilizada para interação com o modo modbus client.

### mbc.MI

Retorna o valor lido na variável MIx.

```
mbc.MI(number);

```

Resposta: `uint/int/float`

### Exemplo

Ler o valor atual da MI1.

```
mbc.MI(1);

```

Resposta: `3`.

### mbc.MB

Retorna o valor lido na variável MBx.

```
mbc.MB(number);

```

Resposta: `true/false`

### Exemplo

Ler o valor atual da MB1.

```
mbc.MB(1);

```

Resposta: `true`.

## cloud

Função global utilizada para realizar comunicação com o servidor IoT.

TAGS DE TELEMETRIA

As tags de telemetria são definidas de forma numérica, temos `4096 endereços para enviar telemetria personalizadas via mhoJS`. Essa quantidade não inclui outras tags de telemetria padronizadas no equipamento, por exemplo: DIs, DOs, AIs, MBs, MIs, pulsos, etc. Essa quantidade abrange apenas as tags de telemetria definidas no mhoJS.

### Como o dado chega ao servidor

Dentro da função deve ser definida qual a memória de telemetria a ser utilizada, sendo esse valor de `1 a 4096`. O equipamento enviará para o servidor a tag `CTX`, onde `X` é o número da memória de telemetria utilizada e `CT` é a categoria de telemetria utilizada que significa Custom Telemetry.

Exemplo: Enviando uma telemetria utilizando a memória 1, o servidor irá receber uma tag de telemetria `CT1`.

### Formas de Envio

Existem duas maneiras de enviar dados, uma associando a um uma 'tag' binária para controle de envios e outra disparando imediatamente a telemetria quando a função for chamada.

A tag binária de controle não está disponível para as funções `cloud.send_srt` e `ìnsight`. O disparo imediato não está disponível para a função `insight`.

**Tag binária de controle**

Quando o envio acontecer utilizando a tag binária de controle, para o envio acontecer novamente o usuário deve chamar a função que limpa a tag binária de controle `cloud.clear(key);`. Dessa forma, a telemetria pode ser chamada repetidamente no loop sem problemas, já que o valor será enviado novamente somente quando acontecer a limpeza da tag binária. *Durante a documentação a seguir a tag binária de controle será indicada nos argumentos das funções como `controlBin` e por padrão tem seu valor como `false` (quando não inserido).

**Disparo imediato**

Quando o envio acontecer utilizando o disparo automático, o programa deve ser feito de forma que envios repetidos não aconteçam, seja por estratégias de lógica ou temporizadores. Caso a função seja chamada repetidamente no loop a telemetria será enviada repetidamente, ocasionando em um alto consumo de banco de dados e dados trafegados.

## Status

### cloud.connected

Retorna se o equipamento está conectado ao servidor IoT.

```
cloud.connected();

```

Resposta: `true` se o equipamento estiver conectado e `false` se o equipamento estiver desconectado.

### cloud.remotecontrol

Retorna se o equipamento está com o modo remoto ativo (variável padrão).

```
cloud.remotecontrol();

```

Resposta: `true` se o equipamento estiver no modo remoto e `false` se o equipamento estiver no modo local.

### cloud.setremotecontrol

Seta valor da variável de controle remoto/local.

```
cloud.setremotecontrol(status);

```

`true` para ativar modo remoto e `false` para ativar modo local.

## Telemetria

### cloud.send_int

Envia um valor inteiro **(de 32 bits: de −2147483648 até 2147483647)** como telemetria para o servidor IoT.

```
cloud.send_int(key, value, ts=now, controlBin=false);

```

Resposta: `true` se o dado foi enviado/armazenado com sucesso ou `false` se o envio falhou.

### Exemplo

Enviar uma telemetria de um numero inteiro na memória 1 `CT1` para identificar a etapa de um processo utilizado na lógica de programação. O timestamp deve ser o momento atual.

```
cloud.send_int(1, 5);

```

Resposta: `true` se o dado foi enviado com sucesso ou `false` se o envio falhou.

Agora nessa mesma situação deve ser enviado um timestamp antigo salvo na memoria...

```
cloud.send_int(1, 5, 1673032387);

```

Resposta: `true` se o dado foi enviado/armazenado com sucesso ou `false` se o envio falhou.

### cloud.send_uint

Envia um valor inteiro positivo **(de 32 bits: de 0 a 4294967295)** como telemetria para o servidor IoT.

```
cloud.send_uint(key, value, ts=now, controlBin=false);

```

Resposta: `true` se o dado foi enviado/armazenado com sucesso ou `false` se o envio falhou.

### Exemplo

Enviar uma telemetria de um numero inteiro na memória 2 `CT2` para identificar a etapa de um processo utilizado na lógica de programação. O timestamp deve ser o momento atual.

```
cloud.send_uint(2, 5);

```

Resposta: `true` se o dado foi enviado/armazenado com sucesso ou `false` se o envio falhou.

Agora nessa mesma situação deve ser enviado um timestamp antigo salvo na memoria...

```
cloud.send_uint(2, 5, 1673032387);

```

Resposta: `true` se o dado foi enviado/armazenado com sucesso ou `false` se o envio falhou.

### cloud.send_double

Envia um valor de precisão **(de 64 bits: de -7.2E+75 a 7.2E+75)** como telemetria para o servidor IoT.

MEMÓRIA RETENTIVA

Por padrão a memória retentiva do JS vem configurada para valores de até 32 bits, caso precise salvar esse valor na memória retentiva em eventos de desconexão é necessário definir a memória JS para 64 bits, veja a função `setTelemetrySize`.

```
cloud.send_double(key, value, ts=now, controlBin=false);

```

Resposta: `true` se o dado foi enviado/armazenado com sucesso ou `false` se o envio falhou.

### Exemplo

Enviar uma telemetria de um numero double na memória 3 `CT3` para identificar a etapa de um processo utilizado na lógica de programação. O timestamp deve ser o momento atual.

```
cloud.send_double(3, 5.21);

```

Resposta: `true` se o dado foi enviado/armazenado com sucesso ou `false` se o envio falhou.

Agora nessa mesma situação deve ser enviado um timestamp antigo salvo na memoria...

```
cloud.send_double(3, 5.21, 1673032387);

```

Resposta: `true` se o dado foi enviado/armazenado com sucesso ou `false` se o envio falhou.

### cloud.send_bin

Envia um valor binário **(true ou false)** como telemetria para o servidor IoT.

```
cloud.send_bin(key, value, ts=now, controlBin=false);

```

Resposta: `true` se o dado foi enviado com sucesso ou `false` se o envio falhou.

### Exemplo

Enviar uma telemetria booleana na memória 4 `CT4` para identificar a etapa de um processo utilizado na lógica de programação está ativo. O timestamp deve ser o momento atual.

```
cloud.send_bin(4, true);

```

Resposta: `true` se o dado foi enviado/armazenado com sucesso ou `false` se o envio falhou.

Agora nessa mesma situação deve ser enviado um timestamp antigo salvo na memoria...

```
cloud.send_bin(4, true , 1673032387);

```

Resposta: `true` se o dado foi enviado/armazenado com sucesso ou `false` se o envio falhou.

### cloud.send_att

Envia um objeto com atributos para o servidor IoT.

```
cloud.send_att(objeto);

```

Resposta: `true` se o dado foi enviado com sucesso ou `false` se o envio falhou.

### Exemplo 1

```
let objeto = {atributoTeste: true, OutroAtributo: 'Carga 1'};
cloud.send_att(objeto);

```

Resposta: `true` se o dado foi enviado com sucesso ou `false` se o envio falhou.

### Exemplo 2

> Para o MHO Cloud podemos utilizar a tag up_sa para atualizar os atributos do servidor. Útil para configurar alarmes e parâmetros de equipamentos padronizados utilizados em grande escala.
> 

```
let objeto = {up_sa: true, DI1name: 'Carga 1', DI1notify: true, DI1true: 'Falha', DI1false: 'Ok'};
cloud.send_att(objeto);

```

Resposta: `true` se o dado foi enviado com sucesso ou `false` se o envio falhou.

### cloud.clear

Limpa tag binária auxiliar de controle, permitindo envio novamente da telemetria. `Serve para send_int, send_uint, send_double e send_bin`. Dessa forma controlamos o envio de telemetria conforme os eventos do código e não a cada vez que a função for chamada.

```
cloud.clear(key);

```

Resposta: `true`.

### Exemplo

Enviar uma telemetria de uma variável `valor` inteiro na memória 1 `CT1` para identificar a etapa de um processo utilizado na lógica de programação. Caso a condição 1 seja atendida a telemetria é enviada novamente.

```
cloud.send_int(1, valor, true);

if(condicao_1)
{
    cloud.clear(1);
}

```

### cloud.send_str

Envia um valor string **(de até 30 caracteres)** como telemetria para o servidor IoT.

DICA

Use esse recurso em situações em que a função `send_int` ou outra não atenda. Lembre-se que é possível pós processar os dados diretamente na plataforma. Esse recurso normalmente consome mais banco de dados e mais tráfego de dados. `Esse tipo de telemetria não consome recursos das 4096 memórias alocadas para telemetria`, as tags são strings e podem conter qualquer valor.

ATENÇÃO!

Essa função não salva os valores na memória retentiva quando estiver desconectado.

```
cloud.send_str(key, value, ts=now);

```

Resposta: `true` se o dado foi enviado com sucesso ou `false` se o envio falhou.

### Exemplo

Enviar uma telemetria de um string com a key 'etapa' para identificar a etapa de um processo utilizado na lógica de programação. O timestamp deve ser o momento atual.

```
cloud.send_str('etapa', 'enchendo');

```

Resposta: `true` se o dado foi enviado com sucesso ou `false` se o envio falhou.

Agora nessa mesma situação deve ser enviado um timestamp antigo salvo na memoria...

```
cloud.send_str('etapa', 'enchendo', 1673032387);

```

Resposta: `true` se o dado foi enviado ou com sucesso ou `false` se o envio falhou.

### cloud.alarm

Envia parâmetros para o sistema de gestão de alarmes.

DICA PARA USUÁRIOS QUE NÃO UTILIZAM O MHO CLOUD

Essa função é implantada dentro do MHO Cloud para gerenciamento dos alarmes, caso esteja utilizando outro sistema é possível implementar funções parecidas dentro do seu sistema utilizando o mesmo padrão de tags. Os payloads são enviados da seguinte forma: `{"alarmType": 1, "alarmText": "Esse é um alarme", "alarmNotify": "0100000"}`

```
cloud.alarm(key, type, text, notify, controlBin=false);

```

Onde:

- key: Tag de telemetria para utilização da tag controlBin;
- type: Tipo de criticidade do alarme:
    - 0: limpo (utilizado para limpar o alarme criado previamente);
    - 1: crítico;
    - 2: alto;
    - 3: baixo;
    - 4: atenção;
    - 5: indeterminado.
- text: Texto que representa o alarme;
- notify: Configuração de notificação, passar parâmetro de array binário '0000000'
    - bit0: Email;
    - bit1: Telegram;
    - bit2: Central de notificações; *(futuro)*
    - bit3: SMS; *(futuro)*
    - bit4: WhatsApp; *(futuro)*
    - bit5: Slack; *(futuro)*
    - bit6: Teams; *(futuro)*
- controlBin: Utilizado para controle binário dos envios.

Resposta: `true` se o dado foi enviado com sucesso ou `false` se o envio falhou.

### Exemplo

Enviar um alarme crítico com a mensagem 'Vazão baixa' e notificação por Telegram.

```
cloud.alarm(1, 1, "Vazão baixa", "0100000");

```

Resposta: `true` se o dado foi enviado com sucesso ou `false` se o envio falhou.

## Insights

### cloud.insight

Essa função foi pensada para utilização de informações de inteligência em situações que um alarme não pode ser gerado. Na maioria das vezes ela é gerada para alertar os usuários de possíveis problemas que podem estar acontecendo ou vão acontecer em um futuro próximo.

DICA PARA USUÁRIOS QUE NÃO UTILIZAM O MHO CLOUD

Essa função é implantada dentro do MHO Cloud para gerenciamento dos insights, caso esteja utilizando outro sistema é possível implementar funções parecidas dentro do seu sistema utilizando o mesmo padrão de tags. Os payloads são enviados da seguinte forma: `{"insight": "Possível problema detectado no pressostato"}`.

```
cloud.insight(insightKey, insight, resetTime=0);

```

Onde:

- insightKey: Tag de insight para controle binário e de tempo do envio das telemetrias, ou seja cada tipo de insight deve ter a seu número (1 a 100);
- insight: Texto enviado para o servidor;
- resetTime: Utilizado para reset automático da tag binária de controle dos envios, tempo em minutos.
    - 0: Valor default quando não informado, reset automático desabilitado, o usuário deve chamar manualmente a função `insightClear`

Resposta:

- 2: Erro ao enviar.
- 1: Servidor desconectado
- 0: Tag binária não permite o envio.
- 1: Enviado com sucesso.

### Exemplo

Enviar um insight com a mensagem 'Possível problema no pressostato' com reset automático para novo envio após 6 horas (360 minutos).

```
cloud.insight(1, "Possível problema no pressostato", 360);

```

### cloud.insightClear

Função utilizada para limpar a tag binária de controle de envio dos insights.

```
cloud.insightClear(insightKey);

```

Resposta:

- 2: Erro ao enviar.
- 1: Servidor desconectado
- 0: Tag binária não permite o envio.
- 1: Enviado com sucesso.

### Exemplo

Enviar um insight com a mensagem 'Possível problema no pressostato' com reset automático para novo envio após 6 horas (360 minutos).

```
cloud.insightClear(1);

```

Resposta: `true`.

### cloud.insightStatus

Função utilizada para ler status da tag binária de controle de envio dos insights.

```
cloud.insightStatus(insightKey);

```

Resposta: `true/false`.

### Exemplo

Ler o status de um insight.

```
cloud.insightStatus(1);

```

Resposta: `true/false`.

## Configurações

Funções para configuração das portas e envios. As configurações podem ser realizadas em tempo de execução.

### cloud.configDI

DICA

Desabilite canais de telemetria para dados não importantes. Otimize o consumo de dados.

Habilita ou desabilita a telemetria do canal desejado. Por padrão todos os canais de DIs são habilitados.

```
cloud.configDI(DI, state);

```

Resposta: `true` se o canal for configurado com sucesso, `false` se o canal for 0 e erro se o canal não existir.

### Exemplo

Desabilitar a DI1.

```
cloud.configDI(1, false);

```

Resposta: `true`.

### cloud.configDO

Habilita ou desabilita a telemetria do canal desejado. Por padrão todos os canais de DOs são habilitados.

```
cloud.configDO(DO, state);

```

Resposta: `true` se o canal for configurado com sucesso, `false` se o canal for 0 e erro se o canal não existir.

### Exemplo

Desabilitar a DO5.

```
cloud.configDO(5, false);

```

Resposta: `true`.

### cloud.configAI

Habilita ou desabilita a telemetria do canal desejado. Os canais são configurados via webserver e por padrão iniciam todos desabilitados.

```
cloud.configAI(AI, state);

```

Resposta: `true` se o canal for configurado com sucesso, `false` se o canal for 0 e erro se o canal não existir.

### Exemplo

Desabilitar a AI1.

```
cloud.configAI(1, false);

```

Resposta: `true`.

### cloud.remapIO

Troca o nome da tag de telemetria enviada para o servidor. Útil para situações de grandes sistemas que compartilham as mesmas dashboards, porém por algum motivo a IO precisa ser remapeada.

```
cloud.remapIO(IOtype, IO_a, IO_b);

```

Resposta: `true` se os canais forem configurados com sucesso, `erro` se algum parâmetro for inserido incorretamente.

### Exemplo DI

Remapear a DI5 pela DI1 (trocar virtualmente a telemetria).

```
cloud.remapIO('DI', 5, 1);

```

Resposta: `true`.

### Exemplo DO

Remapear a DO2 pela DI2 (trocar virtualmente a telemetria).

```
cloud.remapIO('DO', 2, 1);

```

Resposta: `true`.

### Exemplo AI

Remapear a AI2 pela AI1 (trocar virtualmente a telemetria).

```
cloud.remapIO('AI', 2, 1);

```

Resposta: `true`.

### cloud.setAlarm

> Função exclusiva de uso MHO Cloud.
> 

Seta via dispositivo as configurações de alarme do servidor (MHO Cloud). Útil em grandes sistemas ou equipamentos padronizados que possuem as mesmas configurações de alarme.

```
let alarmObj = {DI1name: 'DPS', DI1true: 'ALARME 1', DI1false: 'OK', DI1notify: true};
cloud.setAlarm(alarmObj);

```

Resposta: `true` se a telemetria for enviada.

## Comunicação m2m

Funções para comunicação m2m entre equipamentos ou obtenção de parâmetros da plataforma.

### cloud.setAtt

> Função exclusiva de uso MHO Cloud.
> 

Função que seta os atributos compartilhados utilizados para que em todo evento de conexão com o servidor eles sejam sincronizados. As respostas vão para o callback `sa_callback(obj);`. Utilize na inicialização do programa definindo os atributos compartilhados desejados.

DICA

Essa função deve ser chamada apenas uma vez com todas as variáveis de interesse no inicio do programa.

```
cloud.setAtt(stringList);

```

Resposta: `true` em sucesso ou `error`.

Onde:

- stringList: Lista de atributos requisitados separados por virgula, sem espaço.

A resposta do servidor com os atributos serão enviados para o mhoJS via função de callback, `sa_callback(obj)`, onde `obj` são os atributos compartilhados em formato de objeto. [Veja o exemplo de uso m2m](https://docs.mhoeng.com/docs-app/base/m2m)

### Exemplo 1

Definir o atributo `res1_DI1`.

```
cloud.setAtt('res1_DI1');

```

Resposta: `true`.

### Exemplo 2

Definir os atributos `res1_DI1`, `res1_DI2` e `res1_AI1`.

```
cloud.setAtt('res1_DI1,res1_DI2,res1_AI1');

```

### cloud.getAtt

> Função exclusiva de uso MHO Cloud.
> 

Requisita os atributos compartilhados do dispositivo. Útil para comunicação m2m entre dispositivos ou para atualização de parâmetros como variáveis utilizado dentro do contexto mhoJS do equipamento.

```
cloud.getAtt(stringList);

```

Resposta: `true` se o atributo foi requisitado com sucesso, `false` se não pode ser requisitado.

Onde:

- stringList: Lista de atributos requisitados separados por virgula, sem espaço.

A resposta do servidor com os atributos serão enviados para o mhoJS via função de callback, `sa_callback(obj)`, onde `obj` são os atributos compartilhados em formato de objeto. [Veja o exemplo de uso m2m](https://docs.mhoeng.com/docs-app/base/m2m)

### Exemplo 1

Requisitar o atributo `res1_DI1`.

```
cloud.getAtt('res1_DI1');

```

Resposta: `true`.

### Exemplo 2

Requisitar os atributos `res1_DI1`, `res1_DI2` e `res1_AI1`.

```
cloud.getAtt('res1_DI1,res1_DI2,res1_AI1');

```

Resposta: `true`.

## Callbacks

Funções chamadas em determinados eventos do programa.

### sa_callback

> Função exclusiva de uso MHO Cloud.
> 

Função chamada pelo servidor quando um atributo compartilhado é atualizado, utilizando em situações de m2m ou para definições de variáveis locais de forma remota.

Uso:

```
let sa_callback = function(obj){

};

```

### mqtt_subscribe

> Para utilização em outros sistemas que não seja o MHO Cloud.
> 

Função chamada quando o equipamento se conecta ao servidor MQTT, utilizada para se inscrever em tópicos MQTT.

```
let mqtt_subscribe = function(){

};

```

### mqtt_callback

> Para utilização em outros sistemas que não seja o MHO Cloud. Função chamada quando uma telemetria é recebida no tópico subscrito.
> 

Uso:

```
let mqtt_callback = function(topic, payload){

};

```

# wave

Funções para interação local com outros dispositivos através do protocolo mhoWAVE. Com esse protocolo é possível transmitir objetos com outros dispositivos da linha sem fio, a comunicação é baseada em Wi-Fi *peer to peer*, sem necessidade de um roteador Wi-Fi para estabelecer conexão entre os dispositivos.

É possível estabelecer comunicação *One-Way*, *Two-Way* ou *Mesh* (como repetidor).

**Características**

- Comunicação unicast criptografada ou não criptografada do tipo ***peer to peer***;
- Até 250 bytes de payload podem ser transportados;
- Até 150 metros de distância com visada;
- Até 400 metros de distância com visada no modo *long-range*;
- Até 10 receptores conectados, utilizando criptografia;
- Até 20 receptores conectados ao total, considerando ***peers*** criptografados e não criptografados.

### wave.init

Inicia a configuração do protocolo. Ou seja, este dispositivo envia dados para outros dispositivos.

```
wave.init(long_range = false);

```

Resposta: `true/falha`

Onde:

- long_range: define se o modo long range será utilizado, caso não informado não será utilizado.

### wave.setup_emitter

Configura o dispositivo atual como um emissor. Ou seja, este dispositivo envia dados para outros dispositivos.

```
wave.setup_emitter();

```

Resposta: `true/falha`

### wave.setup_receiver

Configura o dispositivo atual como um receptor. Ou seja, este dispositivo recebe dados de outros dispositivos.

```
wave.setup_receiver();

```

Resposta: `true/falha`

### wave.add_receiver

Adiciona dispositivos que irão receber dados deste dispositivo. Ou seja, este dispositivo irá enviar dados para os dispositivos configurados aqui. É possível definir o canal de comunicação Wi-Fi e a chave de criptografia.

```
wave.add_receiver(mac, channel = 0, encrypt = "");

```

Resposta: `true/falha`

Onde:

- mac: String que contem o endereço MAC do dispositivo que vai receber os dados deste dispositivo;
- channel: canal de operação do Wi-Fi, definido como 0 caso não informado;
- encrypt: chave de criptografia, deve ser a mesma definida no outro dispositivo.

### wave.send

Envia objetos para os dispositivos que estão listados como receptores.

```
wave.send(mac, obj);

```

Resposta: `true/falha`

Onde:

- mac: String que contem o endereço MAC do dispositivo que vai receber os dados deste dispositivo;
- obj: objeto que guarda as informações de interesse dos outros dispositivos.

### wave_callback

Função de callback que é chamada sempre que uma mensagem é recebida.

```
let wave_callback = function(mac, payload) {
    log(mac);
    log(payload);
};

```

Onde:

- mac: String que contem o endereço MAC do dispositivo que enviou a mensagem;
- payload: objeto com os dados de interesse da mensagem.

## Exemplos

### 1 - Sem criptografia, One-Way

Neste exemplo temos dois dispositivos em uma comunicação *One-Way*.

- Keeper #1: Este dispositivo envia dados para o outro dispositivo, este dispositivo tem o MAC fictício de `EE:EE:EE:EE:EE:AA`;
- Keeper #2: Este dispositivo recebe dados do outro dispositivo, este dispositivo tem o MAC fictício de `AA:AA:AA:AA:AA:BB`;

**Código para o Keeper #1 - Emissor:**

```
let mac_keeper2 = "AA:AA:AA:AA:AA:BB";

let setup = function() {
    wave.init();
    wave.setup_emitter();
    wave.add_receiver(mac_keeper2);
};

let loop = function() {
    let envia_wave = {DI1: io.readDI(1), AI1: io.readAI(1, 'i', 0, 10)};
    wave.send(mac_keeper2, envia_wave);
    delay(5000);
};

```

**Código para o Keeper #2 - Receptor:**

```
let wave_callback = function(mac, payload) {
    log("dado recebido do dispositivo => ", mac);
    log(payload);
    io.setDO(1, payload.DI1);
};

let setup = function() {
    wave.init();
    wave.setup_receiver();
};

let loop = function() {

};

```

### 2 - Sem criptografia, Two-Way

Neste exemplo temos dois dispositivos em uma comunicação *Two-Way*.

- Keeper #1: Este dispositivo envia e recebe dados, este dispositivo tem o MAC fictício de `EE:EE:EE:EE:EE:AA`;
- Keeper #2: Este dispositivo envia e recebe dados, este dispositivo tem o MAC fictício de `AA:AA:AA:AA:AA:BB`;

**Código para o Keeper #1:**

```
let mac_keeper2 = "AA:AA:AA:AA:AA:BB";

let wave_callback = function(mac, payload) {
    log("dado recebido do dispositivo => ", mac);
    log(payload);
    io.setDO(1, payload.DI1);
};

let setup = function() {
    wave.init();
    wave.setup_receiver();
    wave.setup_emitter();
    wave.add_receiver(mac_keeper2);
};

let loop = function() {
    let envia_wave = {DI1: io.readDI(1), AI1: io.readAI(1, 'i', 0, 10)};
    wave.send(mac_keeper2, envia_wave);
    delay(5000);
};

```

**Código para o Keeper #2:**

```
let mac_keeper1 = "EE:EE:EE:EE:EE:AA";

let wave_callback = function(mac, payload) {
    log("dado recebido do dispositivo => ", mac);
    log(payload);
    io.setDO(1, payload.DI1);
};

let setup = function() {
    wave.init();
    wave.setup_receiver();
    wave.setup_emitter();
    wave.add_receiver(mac_keeper1);
};

let loop = function() {
    let envia_wave = {DI1: io.readDI(1), AI1: io.readAI(1, 'i', 0, 10)};
    wave.send(mac_keeper1, envia_wave);
    delay(5000);
};

```

# Exemplos Práticos

Exemplo 1: Hello World

```jsx
let setup = function() {
	log("Olá, mundo!");
};

let loop = function() {
	delay(1000);
	log("Olá, mundo! Estou no loop");
};
```

Exemplo 2: Leitura de Entrada Digital

```jsx
let loop = function() {
	let estado = io.readDI(1);
	log(estado);
	delay(500);
};
```

Exemplo 2: Leitura de Entrada Digital

```jsx
let loop = function() {
	let estado = io.readDI(1);
	log(estado);
	delay(500);
};
```

Exemplo 3: Leitura de duas Entradas Digitais para comandar uma saida digital

```jsx
let loop = function() {
	if(io.readDI(1) && io.readDI(2))
	{
		io.setDO(1, true);
	}
	else
	{
		io.setDO(1, false);
	}
};
```

Exemplo 4: Leitura de um sensor 4 a 20mA de nivel conectado na entrada analogica 1, controlando a saida digital 1 baseada nesse nivel atraves de setpoints de liga e desliga

```jsx

let s1 = {xai: 1, min: 0, max: 10};
let sp = {liga: 2, desliga: 4};
let bomba1 = {xdo: 1}

let controle_nivel = function() {
	let nivel = io.readAI(s1.ai, 'i', s1.min, s1.max);
	
	if(nivel < sp.liga)
	{
		io.setDO(bomba1.xdo, true);
	}
	else if( nivel > sp.desliga)
	{
		io.setDO(bomba1.xdo, false);
	}
};

let loop = function() {
  controle_nivel();
};
```

Exemplo 5: Codigo que usa uma função de tempo que não bloqueia o código
```jsx
let lastTime = 0;
let loop = function() {
  
  let timenow = rtc. millis ();
  if((rtc.millis() - lastTime) > 500)
  { 
    lastTime = rtc.seconds();
    //codigo que executa a cada X millesegundos
  }
};
```

# Exemplos Avançados

# Exemplos Reais