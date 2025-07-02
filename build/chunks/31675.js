/** Chunk was on 85831 **/
t.a(e, async function(e, r) {
  try {
    t.d(n, {
      Q: () => i,
      h: () => function* e(n) {
        for (let t of n) switch (yield t, t.type) {
          case "paragraph":
          case "spoiler":
          case "strikethrough":
          case "underline":
          case "italic":
          case "bold":
          case "quote":
            yield* e(t.value);
            break;
          case "heading":
          case "small":
            yield* e(t.content);
            break;
          case "list":
            for (let n of t.value.items) yield* e(n.content);
            break;
          case "link":
            t.text && (yield* e(t.text))
        }
      }
    });
    var l = t(508866),
      o = e([l]);

    function i(e, n) {
      return JSON.parse((0, l.Qc)(e, n))
    }
    l = (o.then ? (await o)() : o)[0], r()
  } catch (e) {
    r(e)
  }
})