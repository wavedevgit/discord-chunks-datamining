/** Chunk was on web.js **/
/** chunk id: 202370, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => r
});
var r = {};
r = {
  dateRange: e => `${e.startDate} do ${e.endDate}`,
  dateSelected: e => `${e.date} odabran`,
  finishRangeSelectionPrompt: "Kliknite da dovršite raspon odabranih datuma",
  maximumDate: "Posljednji raspoloživi datum",
  minimumDate: "Prvi raspoloživi datum",
  next: "Sljedeći",
  previous: "Prethodni",
  selectedDateDescription: e => `Odabrani datum: ${e.date}`,
  selectedRangeDescription: e => `Odabrani raspon: ${e.dateRange}`,
  startRangeSelectionPrompt: "Kliknite da započnete raspon odabranih datuma",
  todayDate: e => `Danas, ${e.date}`,
  todayDateSelected: e => `Danas, odabran ${e.date}`
}