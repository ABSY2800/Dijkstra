function dijkstra(graph, start) {
    const distances = {};
    const visited = {};
    const queue = [];
    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0;
    queue.push(start);
    while (queue.length) {
        let currentVertex = queue.shift();
        if (visited[currentVertex]) {
            continue;
        }
        visited[currentVertex] = true;
        for (let neighbor in graph[currentVertex]) {
            let distance = distances[currentVertex] + graph[currentVertex][neighbor];
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                queue.push(neighbor);
            }
        }
    }

    return distances;
}
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

const result = dijkstra(graph, 'A');
console.log(result); 
