/** Chunk was on 4267 **/
n.d(a, {
  Z: () => o
});
var t = {
  lessThanXSeconds: {
    one: "menos de un segundo",
    other: "menos de {{count}} segundos"
  },
  xSeconds: {
    one: "1 segundo",
    other: "{{count}} segundos"
  },
  halfAMinute: "medio minuto",
  lessThanXMinutes: {
    one: "menos de un minuto",
    other: "menos de {{count}} minutos"
  },
  xMinutes: {
    one: "1 minuto",
    other: "{{count}} minutos"
  },
  aboutXHours: {
    one: "alrededor de 1 hora",
    other: "alrededor de {{count}} horas"
  },
  xHours: {
    one: "1 hora",
    other: "{{count}} horas"
  },
  xDays: {
    one: "1 d\xeda",
    other: "{{count}} d\xedas"
  },
  aboutXWeeks: {
    one: "alrededor de 1 semana",
    other: "alrededor de {{count}} semanas"
  },
  xWeeks: {
    one: "1 semana",
    other: "{{count}} semanas"
  },
  aboutXMonths: {
    one: "alrededor de 1 mes",
    other: "alrededor de {{count}} meses"
  },
  xMonths: {
    one: "1 mes",
    other: "{{count}} meses"
  },
  aboutXYears: {
    one: "alrededor de 1 a\xf1o",
    other: "alrededor de {{count}} a\xf1os"
  },
  xYears: {
    one: "1 a\xf1o",
    other: "{{count}} a\xf1os"
  },
  overXYears: {
    one: "m\xe1s de 1 a\xf1o",
    other: "m\xe1s de {{count}} a\xf1os"
  },
  almostXYears: {
    one: "casi 1 a\xf1o",
    other: "casi {{count}} a\xf1os"
  }
};
let o = function(e, a, n) {
  var o, i = t[e];
  return (o = "string" == typeof i ? i : 1 === a ? i.one : i.other.replace("{{count}}", a.toString()), null != n && n.addSuffix) ? n.comparison && n.comparison > 0 ? "en " + o : "hace " + o : o
}