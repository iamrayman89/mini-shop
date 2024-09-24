const image1 = "data:image/jpeg;base64,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";
        
const  image2 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBgYFxgYGB0dHRkXGR0ZGhsdIBobHiggGholGxobITEhJSkuLi4uGB8zODMtNygtLisBCgoKDg0OGhAQGyslICUtLS0tLS8vLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS8tLy0tLS0tLS0tLS8tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EAEEQAAEDAgQDBQUGBQMEAgMAAAECAxEAIQQSMUEFUWETInGBkQYyobHwFEJSwdHhI3KCkvEzYqJDssLSB2MVU3P/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAwEQACAgAEAwcEAgIDAAAAAAAAAQIRAxIhMUFRcQQTMmGBobEUIpHRwfBC8QVS4f/aAAwDAQACEQMRAD8AqfM5eoCRrayTI2nMbzqBS/HKKRngWgGxPdlOYi0yQB53ogK7qTpKdbzIJHhEEa+O1CvRudja2l+eutRGCWHO+iToFDyEkfp5U49lcPK1rO5gDnluf+RHpWbYV3kJJElRSLRJtEAyetfQuGMJbCU2BQSCJvNosDY9etCtQ8BtkyoJO0fAAnx5VRjsRDYWLRfw3+VvOjsZ/pqvt+1Z/jLh+zJI2UifGQT6m0U4o/4euRJPM1F0hCSo+XU8vAVHg6gUjLpBCfDT9p6cqV8cxKkqSkIUYGa2lyf0oN6BSKMUorJKlT+Q/SqUsJqn7Qs6Nq+H61EuO7IHmr9qWx6DAkV7MUD/ABvwoHif2r3s3j95A8ifzrWGg9C71aHR9cooBGBWdXT5JH5zRKOGpPvOLP8AVH/aBWBQc29R7Lo5il+G4Nh90lX8y1q+ClRTnCNsMjuJbbGpgJTPjTIB4xi0rX2aZlJlVja1hJ1Phypb/wDIeLDWAWnd1SWgJixMq2/Ak+tOE8QbU4QFpUcoPdINhMm2w/Osx7aM/alISFgIbBjqpUSfAAADzpcSWWLDFWz5LiGgRASAOmvr+kUEvAjats/7OKHu97yoB7g60+8mPAzXMp0XcTKfZ4/a3yo3haoUe9rAuZpkrBx901Q9wpK9fUEg+ooykmqZkqdix5hUqVaJNyOvQ614xiFDTTrTl5jMbyfOhXMBe000Z8xXEN4c/nIABzHbUnw51ocOy4IzNrjqlXwMWpf7NY7sEKSAAoqlR3IgRfpe3WtbwD2qw6/4boDa5IQ4oqLayNiQrunzje1gax1JySQ/4Qe6PCmOJchBO8W8aBT2iTK2EJA0hxRzeF/nzqb2JK4SUIynWYUOfOSPLwqyiyTMfjMMpOo89qJ4QiXWx1n0v+VaJ5pBnNA2BQDBHVF58Rfoa8wPCwlYWRAgwoe6ZtvoY21otNAQSs1Uujjhk81eh/Soqwyde96ftRsBmlSVGNyYrV8DwKECYBJ1J+rCkC8DF21THWD6/wCKLwXHFtd1xE9dD+h+FA1AftBiFDEOBKlASLAwPdE/GvaDfcK1KUdVEk+ddQ1CfOuCg9hAmylgQJEEIVcaazE81b6yWycoSLRA9IA+A9CfJeFOJQpDaygKIJiLkTuRbWgXMO4dXnf7yPkajmRVxY4eWUFK02UlUp8YN48RNbP2V4r2oClkBYKUmDEpBsQIsJXB/IafNmGSnVSlfzKJ+dMMAshYheQDUz8B4wKClqHLofbS+C3ciSNvL86zHH0lOHjkU2nkbeI0pVw/2mEBDqkwISmNYgTPMWG1N+LrnCJuVHKleYx94p1Py8KdsnVDv2fXIHhc8+XpB+NZn2j9o8uKdbLau4QAcyINgbQon1Ap1wXGJaZLqz3UJJJ1hKdvE18jxmIcecW4pV1qKjJnU6eWnlWb0Clqa5XtPtk/5ftVLntMrYJHiZ/SsqGVfiFXNYIn70UjfmPqaEe0SzukeA/envCX0ORmJPnHyisY1w1E3WfhWq4Ey0m3ePiaMWgNOjY4fh7BEgE/1r/9qITgWx9xJ8RPzpZhezGg85I/Oi0uo2WR/VPzmm0F1JcQw6Mp7iQdJAAMeIvSL7ENir+5X6xTbGrJTZ31CT8opU0twGSps+OZP5q+VSxGUgi1wuNradQCtTIAvqtEAKRO5IAid0poniCQFBbaQppwBbZH4T+mnpS1fGgk94A9Av8A9kpq/hPGG1hxoyhA/iIKimEqJ76e6T3VE5h1KtoqRTzJnEo0UkjyH5VW5hWXNCR60xabaNxlX5ipKwgPTwpGMZrF8HH3XfI0EvhC4uiRzB/WtaeHI2t8aFd4cqZC6Wg2ZN3hB1yK9KEVgSPun0rapLqNgrzr1GNv326JrMMcIDa1IAgGVMqkEkFJ0JTr+tuYPKvonthxJhGDdWkALgJTpZSjr5Ca+cnFPYbDtsu4ZISoZwVTJzkqBsRlMGOYiDeath3QkqNd7G+0jiMzKlHsgmQ24M4SQQO4dct9NvidKv2lSkEBxCZ1ytJ/PNXzDg3tGhJyuokfiHvDxGih8fGtgxi2lJzIKVJ6bfoehq7cieWJer2vcLi204kgiCmG2rkgE2LYJPhQ7XtO666lLyGlwblWdJSAfeI7SwtMxFY72rdaK+1bzlRIziLWAAI3GmnnbcXCcYBADqQ6kaZrlPgT+x608ZtCyw09j6+OK4Sf9FxRj32nUOAeKA4HIGthV+M4gwtntGncSwLj+KCiI1ssgmOcxY18vT9jMKClAqsE51QDvJUVAWIsUjxNa1GES0jIXnBJSqMzYN53CDBNt5tBy3mimiORmj4aFqAP2lp4fiB715iFIsbc5miMHjEvIzNlLyISqwuAoSLaG3KDpzrL8Nx2HYuFixCzneCyoiSkZVXELgwIIIBBorhPHcIlCEqUlJAOZwJBJICQJDaYJ1uEiwAgUraGUJch4ppmdVDpe3/Gupcfa7DC32j1ad/Nuupcw2R8jAsjMhJUkpVHeEjXoQTNv8VFTFHpZr0MiuOzpoWpw87/AJ1B7AAi5PpThOG8KiWp0Cj4JJ58h0PpWzGUbZnSytAOWDsNoH1+da72SfW80plRJKcoSOSBM9Ikj0oUcPWf+ms/0EfOOYq/DcNcEw2oWg95I2P+7lNNGTvYMsJtDX2rZyYZDYWcylJUoDdICoB6SQYNZD7H1NaNfCnXBAAzT95ep0vE1Sj2fxBIu34ZjO3Tr8+RoyzPZAjh0t1+UIhhIqXZU/HAV7uJ9Cb8tunr0qw8A27WfBB053PIT5ilyzDljzQgbR40zwZI3NHHgH+5fgAkfM1FngyUm61eZQPGLSYplCRmoc/ktbfPMVYMZ1HrVYwSAO8SSP8AeZ2jQDnHl1tL/wDGN/Tiz+cenOnqQtQ5+x4/jSRaTQLuJUbGmLnDWiYtpqSs/M6+NVK4YwDKg0kXIlIj1J8qRwb3GTh5/j/0WiNyB51crFtpTlDiJOt0/rTJjBNH3Q2T/sSkjqDE9NeXU1cC02QhTgSo7d0E+QGtDuvMOZcExEnEjYj+mfyo/D8bcTp2iuhbUr5pox7F4cGFORzzyBPjA9DFEs9nYpuk3BKtvESOWp5UVhLmaTyq3F/30PMP7UQUh1lTeacpIIBI1sYv08eVO2eIMqFlpPQa+lKn2krSUqTmSdjMk+Q7pGsi/pWWxeCLSoXcE9xcWVvB5LA8jtvCyw62FUlLY37jea4AA5zS/FMkaGT9cqxi1qHuqI8DHyqg458H/Vc/uP5zSJGPfa8F5/DYT8a8y/5Bc/8AEKNaHieEQ8gtvJkbGLpPT9OnnWI4bxNS8Y5iCsyhORJMHWx2jQEW51qsL7RK3Uk/zIP5LqjjVC2fP+P8Bcw6pgqQdFD8/r912Exq2zKFEHpuOo0I6Gvsp4q26kpW22oHUSof+JrEe0Hsekkrw0RrkKgY8LAn0nx1qkZ8xGuQnRxNtz/UGVX4k6HxGvpPlVOI4RIztkfzJuD4jnSh9pSDlUCD1q3DYxSDKVEHofqR0p8vFGzcGenMk5FiCbTsZ61pMTxJkf8AUR4Zh+tLmeKpX/qthXMgD/tNifCK0HCsDhnrNdnm/DACv7SJ8xNRxI5t0dGHiVsIF8Wa/Gnyk/KiuDuKecDbKC4o6CCPiqABWsb9mD+ADyorAKawrsOtFcQTkUQU/wDtbbqKMYLkaeLKieG9iVlILmUKvIBka2vHKK6ta37Q4EgHtlJ/2lDhI8TlPzrqvSObvGfPQD7p1Bj6NWJBFB8KxAcabVqVIE/zJ7qvUgmjUtDnXJRdliB9a0Z7PWceEnRBiwmM459dgdTQrbatjRnBSQ66CPuoPoojf+bbnTwWoknoN34veYjkb7j4C3TpXICbSmIGoJG02G2nwqEm28puTePXTUfCohV021jmYHW4OiYgWvHSrEgTG8XQheTsiTMFazkTI6kHMPADWoP8VAiG21zp2alE3v8Adb/TageOuwsAvrkgZWMqo5C6SmxIOptPS1buFdKBmaQkbwEzGu7lvO9TzPU9OGDhOMJNb/3y9h+t50tgpw0KmyVKjKIBzC+k2ixpYccoAhagle6cgn1LkH4aVZwl3DuIcbHbr7uZQJn3JMJymAok6bxQuExQQopSosonR0gH0Ld/WhmGWBFZll2ft7hXDVrdzCWZiEd6+bqlJMpjkZ01igkZsxSpRcV/9SgQB5It4kmrmVlLoUlsYhYNikrJEaXy5R5VfxfCrBBRhwlMAqUg96SBmEBSRIPiK1sbu4KVUkmtNt/kDYxBbJ7Z3ICCAFN94EiAc5SBbwIoTFLQ06Ul0vr0KVpKAPVYT8+m1TxD7aIWhQU5ae0DZHmVK7tNFF95gDtWEqGYr0KSkxEGCEnWdRbyoWFpRd1Sej4fxYuEMrS4orSiQQlpaYnlClmRsYFF4zBoGV9ll5SlySVCcgk2OZCljpFr2OtLsO8LpSCtY+8264RPihAEUXw/GQlacRinE5kwBlWMuhBC1idt7X6VhnfLVbrmuivrqc9hkGHFBKz+EIUn4pQD5nrTR3Dqdb7VLCG3SqJLhBI5yhSSTI0JHnWfcWll1TKCl1U97O0Cf7lLTINtLVaGzh1h5xCom3ZlCB17sgkefrRA1dV6eflWhe6lCu6srU6NiULHoVq+tqv4RxQiUurYSEjupHcM/wDbEE0HinUpbS7hWnRnzTlKhljmgZpHIgR4aULiEBYzqdbWoXKF9p6ZZB/4gUFa2C1Gccslp7p9OBsArpvyVc+fn+1QdQFpKVAEEREWiNZ2MjaNBSng2LcekKYyBKYBAITIgQARI20nlypmZuLEdN5PXeqp2jysTDlhTyvczfFMGtoiO8gmEqMSeQMaH5/ClzjaiLmPCto4gKEKAMiMsTI52006VneIcOKVRmJQTCVG1+R2mN9/GozhWqGi83UyqGggEIG8ne/nVrT5HvGKaOYMiYFLMThiDpWjOxXEOZxYolt+dDWd7RSataxpG9UoU0znD2n05XBJ2Vv9eNZni/sa62Cpr+IjpqPL/PjT3hWKmJNarDLkbGmS5CuR8UUkpMEQasQ5zFfWeMcDYf8AfQAfxJsfPY+dYrinsU8iVNfxE9Pe9N/Kae+YKO4T7XYxmyHe0T+B4Zx5KnMPIx0pliParD4gy8hbDse+g5028IUB5KrGfZlpNwRGo0IqcFJzdIF9KDphTaNX9qG2IYI2JXB9DBFdWeSv/YjzSK6tlfM2Zcjd8G9m1MoypdzwoqGZOWAQARIJBvJ86NWyUmFCDy5jypolW2lR4i2FIBm6dfA/v8zWxcFU2hYYr2YEiveHD+Mq+qDtOhHp414239GuYJD+k9xWluW/KoQWpWQzXlsSSRJG0baEb3H1pFIBTYkCTE6ADQRNvrcVAOmPu2I359OXM+FRLuslO3j1H5nwqwgLxtlakjs2W3DN8+VRSkwRGYjMdZvYza9JGcIylBS52iVC5T2bSQD0tHmTtT/Ht9o2UB3szElQEREyCQRqOtIOHOBpfZt9i8Z1ShWY+dx8YqUlqel2aTeFS3X932Gns+5iFOJh1HYgiUqKCspm4hsd0wOdV8VacQ5mdfS4nVKFLW3Y6DKgcrTFLnmG1OS+lSE8m2Qkf3XOn0KZ8WOFUlOIBXmVCUqQbkoA1m0iNSATalOjbETS300X8/oFxSswCktBsRdY7YxzgBI2i51otDbDrGReJcVkzOKMGctveSbqSD4kTyqjDnEOJMKUE7FTicx6SluR61VgMe3h15FMpKj3StK86oOtj023o0K7rLF6x10d/JDB4lSgW2SlSBopTKU9fxXNt00Oz2WGWVOtrK1pKVGUFJSrXuJ12MEGruMrSHiAyhpKT/qBKoUOfcgR0/eqVvIR/EaeBX//ACBJO99R5n1rDaPpL+7rQK4mpLLmVptTSbHPncyEGDIA/wA2qDjiUkO9ow6q1lBajOpAlZ58hRbGJxbjBgZF5hBIjMki9jOVWlzrI8aEaCkgjEIeMm6u0JT5QoUaFjOlrutHTtv8jVzEPvsk9ggLkQFpF0kagK0IMWNu9SttlKBDocQrYhLaRblE38eW1CYZ1ZdAbdDaZBhboUDf8M38PjR3EOEgOKfDrdzMOAqAm8TOg2B8PHUC1B5bpPVVd9OJZwniThdgvDs5v2i0FUaWKbzvf41XjsMttXauPIdEyA4pSZg6QmQfCIvpQj2JLyYhsncoaWo+WZIirMKnCqbDTi1WVmGYZYUbEDYA8pi3oQ04u6rg0lbrmVPOBYzNI7PmpvtTe/JKR9RTrhvEGylKO3UtYB1GUk+B15WM73pNiHuxX2Ta3TlJBQQmAeUkadRbrXv2JaVdotpThEG7oJt0yiTQVgxIRlGpaLePP3/ZqFKMxN9TffWR5EG3jUXEpIKVJBEXBUYV19D8JpRgsah4qSkKCrHKpU23gyRlm/MUWtkXkAREg6zbnppp+9VWqPLnCWHKpKmBvNZCAVAhXuq1v+FW88jv86XsLNopi6kQZyQREHQg7jn5bm1DtYjIrItQKTZK50J+6qd9gd7eJ58TCrVFYyz9RBjMCOVK3cERzrbvYcHT/NA4jh3KkjNoDiZ/BqynWtJw7iEb+VJMThYOleNSmumE0yMomxL4UOVEMHrWWYxvWnOExQOtUQgp/wDkBxGRtOVPaKVOaBIQkXE8pUn0NVcN9kw40gqXGYBUZT3ZFr5hNqB40r7TjktA90FLfkJUs+UqH9NbsLiwFLQ10IR7DNf/ALVekf8AlXVoAs9a9pKYbQN2mpJgDebDxNVN8RQtKgk5hESNLixHPXX41lvaTCurwrqi4pSkjNbupASZUAka92dSTUfYzFBTaAfwZfNswP8AiZp8TGtaAhha6mmSiNDVQUQ8mwPdWINhp9Hyq4u8h60KtJ7VEpzTIjmTYfGpQeo8hgh6yj3bFJ66E2/PwFc4+SSAoAEAXGpzaDkbT5EdKHRoYSDqZ/CCQkEDf65Valw5rQZCrkGND8e9aLTVhDxX8ROVZlKs0pj7qoEz5CkTbiUqjDrdM7CMvqR4bU/S4YMGLyBzIsP+4mPHpWf4glhLhQylztAYhKiIOkTcenqKnM7+xO7jr/HVluLQ6YU6244kbB0QJ6JTOtHYDiDKm1pS1/ppKy3AMwQCRfUb9DS97AvFICgpUfdU9fzgAfGruFcXbQoNdkGypQTIIVEkRO/zN6W9S7jmw9NWuT29L+EBMZHFzDTQ6kzr4gT6bVc+59nMoW0Sfu5BMf0/meVR41xAl5SFIbRCiCpSJtOosbeutWFpCU5k4lCTzShsX2ACb7fCgisn4W9E+G/vTDXsTiXWEqbQUrzKChvlABCkhXXWZO9LcMUwQ72+Yzsr4Qb0XwTGvukgypBSqHMsQoDukxqnmOt6BODeSrNiGnXN+6ZFr+6NvSj5k1HLmhouOj16a8gjAJf7QZM4bm4dOoEEi4nTl0qfEuGK7VThKVpkwHFEECTa0iB4/OgsUEGOzayK3UpQQBPTMKaJ4R2jCULeBUlRUFAzGYe6Z94SJmxFh44zllandXo9Na56P9C3GYpCkkBtuRqZmALCCkfPpzqXC0s9mttbwOcpOXTKobgqjvXI66GvVOnDHsw60obgJXm88oI9b0C+2krzPlyD+FvKOl+UdJrNjxjplWi3T4+6DXXOwV2bbyyQbpyJMHrcR9TXuIw61HM4hxwROXMkR/SJPkPWiXThHUKXBPZoTJBIUEiwJ3Vtcz1O9LcIFOkobDhR/vdtHgEztoDWEjdZqprdtV+hn9rZfCgWZWhFkkd4pSIgEG8DbWxgbUrwykrOWUNo1yqWs6dMwBPjRbDq8L3uwaym0hRn/n+QqfE8eXWUuNtBUkpVKAooI6RBkfe56ia3UaOmkPC9E72fQrOKOHHdLCgdgDJ+Jt4mmeAPaNheTJc677ja4O0+F6RcPU2od54JVtCEpjzyiakribqXOzadU9tBSDPMSLnQXtRUqExez959v+S4u1ftRoYTzGpyxNjtE7fpBqp1sEEHRXvJAtGttRzuNKv7JUBRSEnKCU28xyMAjTa/Wq0yIuOY1sRz5D4aDWqnlbMrwmKDJyrlSCQELIuCfuq68lfsSdiDO3xoJ9kZSCfespNtNRAMgjXbn5+4F/sj2aiS19xZmUzolR5cleR2J5MXCrWJ0Rlm6kXMNO35/nS/E4M7elac4fw+vQ1QtidvrzqCm0ZpGQ7I+Bq9t8tgqOiQSZ6U+dwAO315Uk9oeHOdkUtjNJEiYMa766V0wxr3Jywxb7ImXVuq1g/3LNz6T61s23qynBsApDYzWUSSbjfb0inGFK5rojJEZJjoEczXVUhKiNq6q5UJYA45mlJFiII6Gx+FY/2TUGnHGVzLbnw9wn0APnWyQCLRWP4012eOCtEvI2/ELHz7qf7q446po6lujcpXGgig3VDtUTmiTOWZiJMRvFXYV0LSlQ1UkH4frQ7sh5oyJziCdjFq0dxWg5kbEHQaTbmTOoifWot/dkAyRYnX3SRzi1QQuJGaLRPPuqEX/Fp/VXqgYsdJ3j8Q1Hjrr0q4hY0pQJEA2vPQFR21keelJeNnDJVC0KLpgqymCSd/w313PSm6MpUIzKROl8xGbr97KPrddxhjDwFv5kriAQSCQADATcGM0T1FJLY6eyyy4i39ATCYZ1SIyrymCAt6J9Egj/HKuw3EjhVQrDpB5hUkj+qZobAoWqexOIyXEqcSkRE/hN77dK5hvsjmdwq13sVLz6eCYPnSHopLM4yp+S0fz+xpxni6g0yUIBQ6nMFLSITeCkiTJHUx0NB8MZSsSp9AUdEoS2kp88o9Ipu3xpC2XHEIkNhIUggTcwCDoBzOtqQsHt1knsWhFhkQSf7tT1tbatxEw4tYclWWnq9yZx7yF5WH1PH+WdOszAueV6Yce4fiHcpSk5MiM7YVBSuCTJPvDkSTpVWPbLAzJxBGhCcqb32A1jWY2ojh+NxDzDv4xl7NVhmucwgmJjQ6SaNcDN6RxYVppb8/RewCy22lOVWEWCBIkTmJi+fYbyK99n8EsPhYUlpIM5QrMSncEAkxG5oZhCW1FWIZcUq3eV3hP5+u1e49ptZAZYVm/EEkC/50PMplpuCunx3XyMcXwRLRLrbyWxJssBQTc2BPw3NtaEXjVuJKA6DzLbRJIsNFEUcjhCnGEIccAUgqKVXVCVAd07m41HIATNDw9hxGdnJP3oTJ6AC/xiKNEVJSVWpST0vl+NSjhD+HaUcyl5yCkladla90FQjTWp8Xaw6AgpautMoKFEAg21Ftdtb7UHj8V2ipW6gInRKVmB07oCj+dOsErDLbS1mCgCSEk97MrlYKF72sZ0GtZcik/taxHm13S2/NIXNcNW4kLyImwT2i3FHnsoAenOiVcbdYORxCLR7hiB0F9rQYpbjVstOZWS5mCoISuADyukyZF6sawziSFhgE6wpyVCdDEAT5HWt0A0ml3nheyej+Qnjrr2cFP+kQFIWETKY1JiQelvjNRQplaROKdBgkysjS+kR/iisNx+VpbWnsyTEquAdpuCL7xve1J8bj3e1yrhogwRlEjrMX+AjSs6WpsOM5JQrLSu1Wvs7CcDxF0uBKFqdRNwqNOcm4tzNaNwkKPd0EHwMCY1FyPAkDpWeWhJEpxSrD8Xh92Z/ztVPD+IOqWEElxOhMQQL3kHTxop1uSxsHvk5QVZVrw/ijQoWRlPjBmRNpBkeEzrI6E+B0kKsL90pjY3FpuJ5fCq3mkhQBzGNUmQZ316XBjfQxeKkgmNReCR4bbk+YtvVTzAjB4sN5UrV/DOipMoO4P+3kbxv0br5CkgjNIRIGomRGhjeJ0O0i8xU+HYss+8JakgKmcmsA/wCw/COQty4uDxReE82j3GpQB1J+fSgsVfujzP5eNHPPRYaxryH6mhOxkgD65muRsdIoaw82j9qKTh0iiUoCRH0TQjzoUYFOptAaTLxfT5/vXVUlUCIn1rq6Fisl3aMskup0X9eFLOPsPu9mTlltUg6WMT8hWgCrwBXj+HmM1vr4Uc9Gyl/CYS0lJVpPxM/nXuOELQSJGYSJ1B2qthtMQL/XSqcSYUgpiQtBHiCCPKa0N0GQ0Z1gJmRATb8MfCZ8hXilpjX7xPkFSNJ2/wAxVLTS+1gQleZQ5gElKTptrQyU9w9Emx6356X0t4E69BIOedIgkScoNtIyJKdd4UD41VxXBIdlK1nMhRIUncqJBMaEd0aVBbIBEKKhAnpc29Eg+Y5UNxHBh1BQ2oA90mTAskZkkzpmKiPDnQktCmDJqaadeYtONLSobxIIuYIUq9+Up9DVWKfC1/x3VkToEQAOkq08qtwmFeYJlgK0GYXjffSwm4FXY3GLUCA2kSLla0SPCSKlWmp62asROKT87ivXbQZ8JxbAGRqJXEi4KhBkEKiRE2Pw2UcUxLKlFKGcy5iwKQDN7DU/UmjOCcECVJdWsSCCMsZZ8bAjnEedS4jwrD3cLhQSZMG2YmTEyTzgflR1olGeHDGdSb/O/pqwRHD3IHcaCtIIUoj1KgPD9atY4642rI6ExIBKTEXF4uDG2nShWV5pQlx9wdEgWF9SsxYVLBvtsqlTLgVspcE77QmL7i9C62KvDcs0cRZnwWz99fks9oMY8l1TZUW0g2IkZhYgyNt4EAHrUfszCkz2xMCSorM7apjw/anD/FGywXMuZObLAAHeIm8juj1F96S4TDKeUVBtpCdf9NJseUg+sUePMnG3hf8ATLx01fzZHhuKc7VIQVuoCrhWhTpMnTpRHFOCvdqtaU9qibSSCB+E5gNNIr13t2LhxGWdMoRfwAG3I0VheKOOsOFCf4iCm0SCkiCQI94Rpe1DyY0pSTWLh1WzfXnt7A6MQqIOFUIFhlhM+MW33pfhOHFbkqUhq4ICVJzTNoAJNue1RQElebE9pJvdJudtdvDoKuxn2YjuJlR0CZt4gz8q24+XupOMU9eKVr0tjrH8FacUXMxQtVzktJ3JBJ3G2utJnMWpBKBiFrtBhAJ/uzXPWTRvAMC7KgsFLS0EFCiRIOhE+7fQ/A1JPAHWjmacT/WiCNrm+m8aXpvNEftg3Cck62/3Tqhcw2lpWZbTqzIMqAiemoJPMmnrPE235SACrKTkUkyYkwmRcxeM2vnSl3HuEZe1ZBJ1TnUY3Fkkec7V5wheHQoKWsqWDIJSYB6amepFC62GnhSnFymnmW1W/wCoE7cOL7qWm081JTbxm0+AFNXcGtsFTeICUjmEgSL7fp8qOxIwziFOFKVBN1KAvc2mDOtp33NZ9hkLWUtMCCbZlLPW8KAsL1th1LvVa+1R3tJr8sP4PxlanAhaQqQQFAER/MPw9bRrTWFZDIASq0XMKHoQq/TXxpYjCYhkktpaI1sIJib3M9da9wvGQ44EuAJJgBQVYnkTfXSTI2NNGVaM5O0YKxG54KVJa1+huTB1ExIUNwdfCBbL1PUVWQcvvdFCwO0dD+3gTf8AZwFEXIHW43BI5zBj47iPZEweWkg3iRoYm/p86HADNOhghOaWjcT7zemvNud9vCwcoQUju77/AL0DF1EI7u4VEX1Gsjl6X3qrCvnD+9Jw5JAJuWvT7h5fd8NObFweKOiE82j3+Q51KjqarSCNP0pgUAiQZBuIOo+WlDraPL68q5A2Vh+uqJT0NdT2YUpcA93686FfWDqfL60qhhc7H1+oq7IJ5n4fvTihOGumAIH1vVGMSElJEyFJM8oI0FWtqNVcQ0B6g69fhTQeoshgpuHClRnvQVTt2nvCOiZHlUUg3HMgb/hA6EjwnbpUnUoSspBzIBIGYkykFZEknlU0qSSrKO7Pd6JKlBPjYCxEV1kijKkpAFlRmWYsc2WDOkwo0QtSsvdScyUriPvEdooC19FBPlUG1nIE5TAUTmGWLACLH/69dLnnViQrLdMoSZ1vOVNo0g9judj1NYJjy92jg7dagJ0j3fLbrvTdTGDCJ7uUWkE5pvbQHbl4VdxzibeZTYbC1AkGU2SeWkkjS0aamhWOGOKEltpuwIlvMbwRM5jUkta3PYnLNCM23BcFa9luK2MOVLIYz+MxbmSIjzrQcV4Q66GjI7RDaUrBm51B53vt1oYPYnDgT2ZTJiAlI6+7lM+utHYbi5cw760ohbQT3ZlJBMzFjAv9ahJVTNjYmLccSFUtLu3rzF+FXiWRl7AFPNNhb/cDE+PKo4l511QSpxtpM7uJt4hKif8ANBMKQ84C+5rz+F9EjTSwp0/h8JkCiU5QAAUKJOlvHY6daKtrc01HCxE3H7vJOr8reobw/hTSWSgnMlZSVmbGNCCDYi2nLU0n4rgmGfdcWlVu6kgnzkiBG5N+VBcJbcLySwFd1QJk2gHQnSItBmac8a4A52y3WgCgqkhViFaq1EaydRY1rtaI2Xu8apz3V8teT3oVnD5wFlp52DF1gfAIJjrNMcJxxtAyKaU2ByEgcr2O2wvF5qxnE4oWVhwYGogbW+9ljTShRwl59yXlADcBQmRtGibb+NboK8srji0oran8LYK9pOKOIUEJCe8kKC9iFcpttqdOlU8PwqnEyX1En7qFxHK0ibdN6dOYZpSEtqbzBKSlOhygciZMRH6il73s6zMpCh0zEC+lyCetNld2Qhj4awsi+186u/0KcaCwYbxCidwDIB63j4Ue0y7iMKZkLChB0DqDaDHL0sOZo5PCWUDMWpMzKipQO+hmZo1p4gGTNtDInQ6AzYDfpWUXZsTtcXGOVXJO7aX8Gaw2Hdw5JVhs3UGSOtpj0onGYlbqQEYZcnUrTp4SAL02KgTMKN+ZNvCY13qT7sxpEfe1gaQNteu9ZRrSxJ9rUpZ3HXq/2LOAcKU2S47YLSpBQQCkpOuaLdQkfCvXPZ1oiWnFpIv71gekwo+tNFzBAsRqfe+vCKpLifdzgzHIconl6UciEl2zFc3O6v8AAA3wx1QUheKVl3lJ265iRryqfDeDNtKm6j90m8EckgC8czRCcSlBgFSo5GZEgzIm0cudSLiRBABNpudtiVDkdugrZUL9TiNNXSe9afAW7iO8QIg6iDPMmJ1/U86oexFgLGNIIsTyInaLR6XmsunLMR1yiDtrJvHzqtrEG+io5GPCBIJ8OlMc7DW513AINrRa1xF56xHSarLZCSZB1ChEAG8WJNomCTufIfCOKJFlGbgkTrvaRBixPKvVNrPLSR3gDBvMAgAGAJsJAomIocOG0zHDnbVTJk7RdHMRbUTpTYPSAQQoEAggiCDoQRqOtK38KSZsBf3u9bQxAskSASfdjcUDh3zhSAe8ySbAGWzNykG5TOo2mRO8MXCT1RaMs3U0BdP1FdXjRCwFIUFJNwQQQR417UMgbMgSdPQAfKrGiedQQoG4M1aFTrQCGMYgDVI+VUcQQgi1jyPjU2xbUEdajjQMhpo7isYLyySgQgzl8IV+Zq1RClqIBSFGQIuBmKiPxQJ/Wrn1JUSQIBkCQRsE2kTqa9dflSjliQq0DbJGh0Oa29wa6yJS1mKSkDukgk5tJUtINk3/ANUjbUVLDJUoEWAgKUIN0gjS+o7Q89a519aZgAyYPgOzUnXTvJ30jmJFqIy2zAWygCdhrcRP1pWMJ+J8EC1F1LuRSxmUNQCYBuIIvtevMJg8aNHUFA/Ecwj+2aaLKtynzMm3iZieh1PWpFwTGcAjrJ8bgekbm1LlW51fVTy5XT6oSJ4EtxUuuqVHJJ+CjaNLgU6wrSGQUoRykptMayTdVchewJUqw92SJ1ttpqNx6DuOpSYObYEDbfTUeXI3oqKQmJ2jEmsrenLgRxuDw65KkJBHKwubd4EGb7g6V5hODMgT2QIBubmB1kkTRKXMwkyYgd5RnnAGwvz29IoUSYKRvqJt4TPxA05GjSF7/ESrM6JsMpHdRCRewTlEkHpfxHLS9EuSfukxrFrdTqZ+F6FKlk90k3sIuZjadbCuWT7pkrmD8LAQItv02ok273C1IgW31nQWkT3rx+VVtwO6qCbaTaOnPTnUG0ERoSIBSb2OliIB+NRQyIzL7tpv3SBIBJK4AG/yBrAJrcDZ7xM2MH10Vt9da5x9NlEZtLxfebAW2GvWq14Vc6gm5jdSgZgbQRcSfzr1xCF8wDABbBMpVooCVE3iSbamtRrIJfn7pSYEQEnw1PTW9VpUtRFxGuoFhOskDU686uLgAyyIJ9yTqBKkgAjOu0ggc67LpKRY6zaRIvOXOVJOmgIomA1NkmJMHYEkZtSJJM6TrVwbOWEHONZ0vOmca/lbQVyschMS4EyNFKExqmSAO8lUwkHS9BO8YamSoKUNISRc2UASFBKCLwDM0G0ikMHEn4Yt+gWygpSRlIN5vMREggA3gyBIMVNDRmApBIvlkjnlkC6UkCyidREUqd48gWSly1gbWAJggKKgFQQCYvQ7nH1EEBtOW9lGRBgmRobiRy0FLnidC7DjveNdaQ7UwmRJVoYiBIkHMASVBImCSJBi3LzKkkSAdQAQRpIsDqU7mIIIiazi+MumYKBJkwLkwBJBN55RFV/anl/eWSdYkT6RNDPyQfo1HxzivW/g1eURpECxBC4Jv3Ss95U3zRBFqrfxzdwXG7GYgnQ5tbZidQQISbVmRgH1fcJ/m/zRmH4C+T7oFbM+QO77Mt5t9F+w9zjDQ3UoyY94+ZBASSTtoDcVU7xxJGUNqUOSyLkiJUE6mLRMaWm9Xs+yKzdS6KT7LoGqiaFvmDP2aO0G+r/Qoc4y5slCbgnWSRpeRpp4azQrvEnDI7QQYsADYSQNDYSbaCtSjgDKfuzRTfDmhYIHpQfVh+pS8MIr3PnzeHVFisDkJFdX0j7Kn8Pwr2sI+0zbul+EfO8kX0q1OKItPqKuUkb/ABrk4UEToOv1pXOKTZxY3ir8UqUEjl9aUL9m6/Ch8WlIBAuaK3AzXF2VApy6IJuDaGgZg80q10taqnse4rKcsd1I/wCISTG+k9STXYXDlSEwY7sHKDcgd0kycs66bjSrmkZbgrPdQQUqCrE94ASFabmwtyNdZIoC5sVZSdZIFiIjbw1qbndGZa0qAm0jU7kTMdTraiEpQFATo5lIJMHMmQP4g71yBCT52IqWTKAIHuLFk5TKSANCUJ1tY7ciKwAMtyZhQBMTyO2lSeWQkhIUUgEk3y90kKnUZgRob26Vc48i5UkJns15hcKM3AKO8TAGojTW9VniTCCP4wPeVqQo5SNNikAgC06DnbWNGEpbKzmmpBAQQZGhTpE6AWESJJAnnIrxppSRJuIz2GbQ3ACZUpWmg3gXNUjjrNpMkBvRKiMyT3okAyR94qOgtrND3tG2nRC1e/7xBzBd4JMqAmLCNBQzx5l49jx5bRYzVhSpR74TCgFAa3SCDdUpJNrybaXt4pghMEEyJIzalChnAScpIM6kwLHe6FXtQ4of6abBIm5HdJIOU2Bv8ByFAYj2kdmxSm5MJtc62m+u9DvEU+hxF4ml1aNf9kQlRggSVIumUkqGZKpIGYj3e6YuZ0tIWTngRY8tBlWCe+BYe6ncG9yawauNPKtnUZgd0RYaCUjQT8ahmdX91Sv5pPzNB4gPpsNeLEXpbNy9jWkApLoQLoHfFoMoUEgqSANJKZsLbUC9x9oEjMFSQqAgwJ98AjLmJucx3MxWXbwDxsEgVc3wZw/eFL3ocnZo8ZP2GTvtAiDDZzWuSBJT7pJTBUbCRoaFf9oXJsEAXkGVSFag5jBT06CvWuAJ1Uo/KrU8HbTfLPKaR4vmN3mDHw4f5dgTvHHiZ7U+QA+QmhVPqV+NXqfnTwYZIBhIHlTDBYfKmVROvh+/Slcx/q5rwqK6IzSMG6f+nRDfB3TMkADWtKkjXYfUmhHXs38o+NLn8icu040t5MTt8EKjdZj65UYx7PIJEyZ5/CjEKuKYMwkXN6OdkZa7nYTgjKNEjr1NGhtCfdSKoGI5H4VYhEn3gOn706bJlqQDN9v1q9lPpv1NVHDkCxkV6knf5U4rCHHaq7Qa1HKdiKqcncVgFi11zC4sNedDZ/r/ADXH40LGDe0PMfCuoZJPSuogMb7utz4aeH61zmIgSfr966urnKg6nyrSw+Jqp4d011dRMM2faNttKQlsqKbyYT93L90zPUzvVD/tM4U5QhMZSmFkrkHnIBNra11dT95I9/D/AOPwFFOrB1cfxCv+pHgB+cxQLuOXusjUxJAvc2TbU8q6up0r4nFj43cv7IxXoRLoPU+H5k1MZjoj1V+1dXUGkjjfbseX+VdCSMI6byB9eNXHhzlgXDHS3yrq6kcmhHOcvFJv1CWuBI1USo8ifrlRbfDWx92urqXM2JSC28OkaAUQhA0Arq6pt2ErWvauJj9K6uomJNXrzEr2GtdXUDFbKEpOZZvsPzqztwRF5r2upjFecGxn1/arUFHK/Wurqxi0I5VNJ511dTAZagUQOtdXU6FZYjp+9WpcPj411dTCskXAda7XQzXldRAVrQKqKYr2urIx5m8K9rq6moJ//9k=";

class Product {
    // title = 'DEFAULT';
    // imageUrl;
    // description;
    // price;

    constructor (title,image,description,price){
       this.title = title,
       this.imageUrl = image,
       this.description =description,
       this.price = price;
    }
}

class ElemenAttribute {
    constructor(attrName,attrValue){
        this.name =attrName;
        this.value =attrValue;
    }
}

//This is the parent class for render html element on the screen ..
class Component{
     
    constructor(renderHookId){
        this.HoodId = renderHookId;
    }

    createElement(tag,cssClasses,attributes){
        const rootElement = document.createElement(tag);
        if(cssClasses){
            rootElement.className =  cssClasses;
        }if(attributes && attributes > 0){
            for (const attr of attributes){
                rootElement.setAttribute(attr.name,attr.value);
            }
        }
        document.getElementById(this.HoodId).append(rootElement);
        return rootElement ;
    }
}


class shoppingCart extends Component {
    items = [];

    constructor(renderHookId){
        super(renderHookId);
    }

    set cartItems(value){
        this.items = value;
        this.totalOutput.innerHTML= `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
    }
    
    get totalAmount() {

        console.log(this.items);
        const sum = this.items.reduce((preValue,curItem) => preValue + curItem.price, 0)

        console.log(sum);

        return sum;
    }

    addProduct(product){
        const upatedItems = [...this.items];
        upatedItems.push(product);
        this.cartItems = upatedItems;        
    }

    render(){
        // const cartEl = document.createElement('section');
        const cartEl =  this.createElement('section', 'cart');
        cartEl.innerHTML = `
         <h2>Total: \$${0}</h2>
         <button>Order Now</button>
        `;
        this.totalOutput = cartEl.querySelector('h2');
    }
}


class ProductItem{
    constructor(product){
        this.product = product;
    }

    addToCart() {
      App.addProductToCart(this.product);
    }


    render(){
        const prodEl = document.createElement('li');
        prodEl.className= 'product-item'; 
        prodEl.innerHTML = `
        <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class= "product-item__content">
             <h2>${this.product.title}</h2>
             <h3>\$${this.product.price}</h3>
             <p>${this.product.description}</p>
             <button>Add to Cart</button>
            </div>
        </div>
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this));
        return prodEl;
    }
}

class ProductList {
    products = [
        new Product(
            'Pilow',
            image1,
            'A soft pillow!',
            19.99,
          ),

        new Product(
            'A Carpet',
            image2,
            'The Expensive carpet',
            89.99
        )
    ];

    
    render(){
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const productItem =  new ProductItem(prod);
            const prodEl = productItem.render();
            prodList.append(prodEl);
        };
        return prodList;
    }
}


class Shop {

    render() {
        const renderHook = document.getElementById('app');
        this.cart = new shoppingCart('app');
        this.cart.render();
        const productList = new ProductList ();
        const prodListEl = productList.render();

        renderHook.append(prodListEl)
    }
}



class App {
    static init(){
        const shop = new Shop();
        shop.render();
        this.cart = shop.cart;
        
    }

    static addProductToCart(product){
        this.cart.addProduct(product);
    }
}

App.init();

// const productList = {
//      products: [
//           new Product(
//             'Pilow',
//             image1,
//             'A soft pillow!',
//             19.99,
//           ),

//         new Product(
//             'A Carpet',
//             image2,
//             'The Expensive carpet',
//             89.99
//         )
        
//     ],

//     render(){
//         const renderHook = document.getElementById('app');
//         const prodList = document.createElement('ul');
//         prodList.className = 'product-list';
//         for (const prod of this.products) {
//             const prodEl = document.createElement('li');
//             prodEl.className= 'product-item'; 
//             prodEl.innerHTML = `
//             <div>
//                 <img src="${prod.imageUrl}" alt="${prod.title}" >
//                 <div class= "product-item__content">
//                  <h2>${prod.title}</h2>
//                  <h3>\$${prod.price}</h3>
//                  <p>${prod.description}</p>
//                  <button>Add to Cart</button>
//                 </div>
//             </div>
            
//             `;
//             prodList.append(prodEl);
//         };
//         renderHook.append(prodList);
//     }
// }

