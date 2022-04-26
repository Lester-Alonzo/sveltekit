<script>
  import Grid from "gridjs-svelte"

  const data = 
   [{
  "id": 1,
  "first_name": "Dyna",
  "last_name": "McGuirk",
  "email": "dmcguirk0@mapquest.com"
}, {
  "id": 2,
  "first_name": "Kimberly",
  "last_name": "Bisco",
  "email": "kbisco1@salon.com"
}, {
  "id": 3,
  "first_name": "Muffin",
  "last_name": "Beeble",
  "email": "mbeeble2@ehow.com"
}, {
  "id": 4,
  "first_name": "Nicola",
  "last_name": "Chown",
  "email": "nchown3@amazon.co.jp"
}, {
  "id": 5,
  "first_name": "Annis",
  "last_name": "Riding",
  "email": "ariding4@behance.net"
}, {
  "id": 6,
  "first_name": "Randie",
  "last_name": "Barnicott",
  "email": "rbarnicott5@bizjournals.com"
}, {
  "id": 7,
  "first_name": "Marjy",
  "last_name": "Franz-Schoninger",
  "email": "mfranzschoninger6@columbia.edu"
}, {
  "id": 8,
  "first_name": "Elly",
  "last_name": "Stannis",
  "email": "estannis7@ox.ac.uk"
}, {
  "id": 9,
  "first_name": "Niels",
  "last_name": "Summerlad",
  "email": "nsummerlad8@4shared.com"
}, {
  "id": 10,
  "first_name": "Niccolo",
  "last_name": "Dockray",
  "email": "ndockray9@google.cn"
}, {
  "id": 11,
  "first_name": "Franciskus",
  "last_name": "Du Hamel",
  "email": "fduhamela@acquirethisname.com"
}, {
  "id": 12,
  "first_name": "Cinda",
  "last_name": "Winsborrow",
  "email": "cwinsborrowb@vkontakte.ru"
}]
</script>

<Grid {data} search sort pagination={{enabled:true, limit:5}}/>

<style global>
  @import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";
</style>