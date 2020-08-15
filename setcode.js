document.getElementById('code').value = `import matplotlib.pyplot as plt
import io, base64

GRAFICAS = []

for i in ([1, 2, 3], [2, 5, -3], [5, 10, -2, -20]):
    fig, ax = plt.subplots()
    ax.plot(i)

    buf = io.BytesIO()
    fig.savefig(buf, format='png')
    buf.seek(0)
    GRAFICAS.append('data:image/png;base64,' + base64.b64encode(buf.read()).decode('UTF-8'))

`
