/** Chunk was on 67816 (b0444cde82ac865b.js) **/
i.d(n, {
  Z: () => a
});
var e = i(261168);
let a = {
  date: (0, e.Z)({
    formats: {
      full: "EEEE, 'ng\xe0y' d MMMM 'năm' y",
      long: "'ng\xe0y' d MMMM 'năm' y",
      medium: "d MMM 'năm' y",
      short: "dd/MM/y"
    },
    defaultWidth: "full"
  }),
  time: (0, e.Z)({
    formats: {
      full: "HH:mm:ss zzzz",
      long: "HH:mm:ss z",
      medium: "HH:mm:ss",
      short: "HH:mm"
    },
    defaultWidth: "full"
  }),
  dateTime: (0, e.Z)({
    formats: {
      full: "{{date}} {{time}}",
      long: "{{date}} {{time}}",
      medium: "{{date}} {{time}}",
      short: "{{date}} {{time}}"
    },
    defaultWidth: "full"
  })
}