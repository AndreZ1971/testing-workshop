# Testing-Dokumentation

## 1. Test Coverage Report

## 2. Entdeckte Fehler und Edge Cases:
- Fehlerhafte Eingabe (Nicht-Zahlen): Führte zu unerwartetem Verhalten, jetzt validiert.
- Negative Werte: Score wurde negativ gezählt, jetzt abgefangen.
- Bonuspunkte zu hoch: Punkte über 100 führten zu falschen Noten.

## 3. Teststruktur:
- `describe`-Blöcke für einzelne Testbereiche
- Mehrere `it`-Tests für Edge-Cases
- Parametrisierte Tests für Notengrenzen

## 4. Reflexion über TDD:
TDD hat sich als effektiv erwiesen, um Fehler früh zu erkennen und robuste Funktionen zu entwickeln. Allerdings benötigt es Disziplin und führt zu zusätzlichem initialem Aufwand.

## 5. Erfolgreiche GitHub Action:
