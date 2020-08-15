document.getElementById('code').value = `import matplotlib.pyplot as plt
import io, base64

fig, ax = plt.subplots()
ax.plot([1,3,2])

buf = io.BytesIO()
fig.savefig(buf, format='png')
buf.seek(0)
img_str = 'data:image/png;base64,' + base64.b64encode(buf.read()).decode('UTF-8')
`
