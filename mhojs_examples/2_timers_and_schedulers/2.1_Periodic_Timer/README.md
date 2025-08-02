Este arquivo fornece o contexto para criar um script de timer cíclico, temporizador periódico ou pisca-pisca (blinker), implementado em mhoJS.

A funcionalidade principal é controlar uma saída digital (relé, contator) para que ela ligue e desligue de forma repetitiva e automática. O script permite configurar de forma independente o tempo em que a saída permanece ligada (tempo ON) e o tempo em que permanece desligada (tempo OFF), criando um ciclo intermitente com períodos assimétricos.

Este tipo de lógica é útil para automação de tarefas como sinalização com LED, acionamento intermitente de bombas ou motores, controle de válvulas solenoides, revezamento de cargas, ou para criar um "heartbeat" visual que indica o funcionamento de um equipamento.

O código exemplo main.js demonstra como usar esta função em um loop contínuo, sendo uma solução não bloqueante para controle temporizado.

Buscas Relacionadas e Palavras-Chave:
temporizador cíclico, timer periódico, loop com tempo, agendador de tarefas repetitivas, repetidor de função, controle de ciclo, execução intermitente, piscar LED, alternar saída, revezar cargas, ligar e desligar automaticamente, controlar relé com tempo, acionar contator, automatizar processo, gerar pulso, repetir uma ação com delay, onda quadrada, pulso de clock, ciclo de trabalho, lógica não bloqueante, controle intermitente, período ON/OFF, como fazer um LED piscar com tempos diferentes, script para ligar algo por X segundos e desligar por Y segundos, função que repete a cada X segundos, controlar uma bomba de forma intermitente, lógica de pisca-alerta.

--------------------------------

This file provides the context for creating a cyclic timer, periodic timer, or blinker script, implemented in mhoJS.

The main functionality is to control a digital output (relay, contactor) to turn it on and off repetitively and automatically. The script allows for the independent configuration of the time the output remains on (ON time) and the time it remains off (OFF time), creating an intermittent cycle with asymmetric periods.

This type of logic is useful for automating tasks such as LED signaling, intermittent activation of pumps or motors, solenoid valve control, load cycling, or for creating a visual 'heartbeat' to indicate that a device is operational.

The main.js example code demonstrates how to use this function in a continuous loop, providing a non-blocking solution for timed control.

Related Searches and Keywords:
cyclic timer, periodic timer, timed loop, repeating task scheduler, function repeater, cycle control, intermittent execution, blink LED, toggle output, load cycling, automatic on and off, time-controlled relay, trigger contactor, automate process, generate pulse, repeat action with delay, square wave, clock pulse, duty cycle, non-blocking logic, intermittent control, ON/OFF period, how to make an LED blink with different timings, script to turn something on for X seconds and off for Y seconds, function that repeats every X seconds, how to control a pump intermittently, blinker logic.