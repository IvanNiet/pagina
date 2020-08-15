document.getElementById('code').value = `import matplotlib.pyplot as plt
import io, base64

GRAFICAS = []

for i in ([0.0000134476, 0.9999737, 0.000012802, 0.0], 
                    [0.0, 0.9997714, 0.0, 0.0002286], 
                    [0.00002628, 0.9999737, 0.0, 0.0],
                    [0.0, 0.0, 0.0, 1]):
    fig, ax = plt.subplots()
    ax.plot(i)

    buf = io.BytesIO()
    fig.savefig(buf, format='png')
    buf.seek(0)
    GRAFICAS.append('data:image/png;base64,' + base64.b64encode(buf.read()).decode('UTF-8'))

`
