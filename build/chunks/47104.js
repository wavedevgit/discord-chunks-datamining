/** Chunk was on 31670 **/
/** chunk id: 47104, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  A: () => a
});
var Chunk981737 = require("./981737.js");
let a = {
  ordinalNumber: function(e, t) {
    return String(e)
  },
  era: (0, Chunk981737.A)({
    values: {
      narrow: ["B", "คศ"],
      abbreviated: ["BC", "ค.ศ."],
      wide: ["ปีก่อนคริสตกาล", "คริสต์ศักราช"]
    },
    defaultWidth: "wide"
  }),
  quarter: (0, Chunk981737.A)({
    values: {
      narrow: ["1", "2", "3", "4"],
      abbreviated: ["Q1", "Q2", "Q3", "Q4"],
      wide: ["ไตรมาสแรก", "ไตรมาสที่สอง", "ไตรมาสที่สาม", "ไตรมาสที่สี่"]
    },
    defaultWidth: "wide",
    argumentCallback: function(e) {
      return e - 1
    }
  }),
  month: (0, Chunk981737.A)({
    values: {
      narrow: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
      abbreviated: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
      wide: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]
    },
    defaultWidth: "wide"
  }),
  day: (0, Chunk981737.A)({
    values: {
      narrow: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
      short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
      abbreviated: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
      wide: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"]
    },
    defaultWidth: "wide"
  }),
  dayPeriod: (0, Chunk981737.A)({
    values: {
      narrow: {
        am: "ก่อนเที่ยง",
        pm: "หลังเที่ยง",
        midnight: "เที่ยงคืน",
        noon: "เที่ยง",
        morning: "เช้า",
        afternoon: "บ่าย",
        evening: "เย็น",
        night: "กลางคืน"
      },
      abbreviated: {
        am: "ก่อนเที่ยง",
        pm: "หลังเที่ยง",
        midnight: "เที่ยงคืน",
        noon: "เที่ยง",
        morning: "เช้า",
        afternoon: "บ่าย",
        evening: "เย็น",
        night: "กลางคืน"
      },
      wide: {
        am: "ก่อนเที่ยง",
        pm: "หลังเที่ยง",
        midnight: "เที่ยงคืน",
        noon: "เที่ยง",
        morning: "เช้า",
        afternoon: "บ่าย",
        evening: "เย็น",
        night: "กลางคืน"
      }
    },
    defaultWidth: "wide",
    formattingValues: {
      narrow: {
        am: "ก่อนเที่ยง",
        pm: "หลังเที่ยง",
        midnight: "เที่ยงคืน",
        noon: "เที่ยง",
        morning: "ตอนเช้า",
        afternoon: "ตอนกลางวัน",
        evening: "ตอนเย็น",
        night: "ตอนกลางคืน"
      },
      abbreviated: {
        am: "ก่อนเที่ยง",
        pm: "หลังเที่ยง",
        midnight: "เที่ยงคืน",
        noon: "เที่ยง",
        morning: "ตอนเช้า",
        afternoon: "ตอนกลางวัน",
        evening: "ตอนเย็น",
        night: "ตอนกลางคืน"
      },
      wide: {
        am: "ก่อนเที่ยง",
        pm: "หลังเที่ยง",
        midnight: "เที่ยงคืน",
        noon: "เที่ยง",
        morning: "ตอนเช้า",
        afternoon: "ตอนกลางวัน",
        evening: "ตอนเย็น",
        night: "ตอนกลางคืน"
      }
    },
    defaultFormattingWidth: "wide"
  })
}