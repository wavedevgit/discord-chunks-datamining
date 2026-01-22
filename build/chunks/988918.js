/** Chunk was on web.js **/
/** chunk id: 988918, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => r
});
var r = {};
r = {
  dateRange: e => `${e.startDate} do ${e.endDate}`,
  dateSelected: e => `${e.date} izabran`,
  finishRangeSelectionPrompt: "Kliknite da dovršite opseg izabranih datuma",
  maximumDate: "Zadnji raspoloživi datum",
  minimumDate: "Prvi raspoloživi datum",
  next: "Sledeći",
  previous: "Prethodni",
  selectedDateDescription: e => `Izabrani datum: ${e.date}`,
  selectedRangeDescription: e => `Izabrani period: ${e.dateRange}`,
  startRangeSelectionPrompt: "Kliknite da započnete opseg izabranih datuma",
  todayDate: e => `Danas, ${e.date}`,
  todayDateSelected: e => `Danas, izabran ${e.date}`
}