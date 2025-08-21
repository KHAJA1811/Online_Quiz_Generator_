// questions.js
const questions = {
  // ... existing subjects ...
  DMGT: {
    easy: [
      {
        question: "What does the set notation {1, 2, 3} represent?",
        options: ["A sequence", "A group", "A set", "A function"],
        answer: 2
      },
      {
        question: "Which symbol indicates set intersection?",
        options: ["∪", "∩", "⊂", "∈"],
        answer: 1
      },
      {
        question: "Which is a graphical representation of relationships?",
        options: ["Matrix", "Graph", "Equation", "Tree"],
        answer: 1
      },
      {
        question: "In graph theory, what are vertices also known as?",
        options: ["Edges", "Nodes", "Arcs", "Links"],
        answer: 1
      },
      {
        question: "A simple graph must not contain _____?",
        options: ["vertices", "edges", "loops", "labels"],
        answer: 2
      },
      {
        question: "How many elements does the set {a, b, c, d} have?",
        options: ["2", "4", "3", "5"],
        answer: 1
      },
      {
        question: "Which notation represents the empty set?",
        options: ["Ø", "E", "e", "null"],
        answer: 0
      },
      {
        question: "What is the degree of a vertex in a graph?",
        options: ["Number of vertices", "Number of edges attached", "Number of loops", "Number of colors"],
        answer: 1
      },
      {
        question: "Which graph has every vertex connected to every other vertex?",
        options: ["Cycle", "Complete graph", "Bipartite graph", "Tree"],
        answer: 1
      },
      {
        question: "Which is not a property of simple graphs?",
        options: ["No multiple edges", "No loops", "Connected", "Undirected"],
        answer: 2
      }
    ],
    medium: [
      {
        question: "What is the power set of {a, b}?",
        options: ["{a}, {b}", "{{}, {a}, {b}, {a, b}}", "{a, b, ab}", "Ø"],
        answer: 1
      },
      {
        question: "What is a bipartite graph?",
        options: ["A graph with cycles", "A graph divided into two sets, no set having edges within itself", "A graph with parallel edges", "A tree"],
        answer: 1
      },
      {
        question: "Which algorithm finds the shortest path in a weighted graph?",
        options: ["DFS", "BFS", "Dijkstra's", "Prim's"],
        answer: 2
      },
      {
        question: "What is the chromatic number of a cycle with odd vertices?",
        options: ["1", "2", "3", "Depends on edges"],
        answer: 2
      },
      {
        question: "Which matrix represents connections in a graph?",
        options: ["Adjacency matrix", "Incidence matrix", "Distance matrix", "Laplacian matrix"],
        answer: 0
      },
      {
        question: "Which is true for a tree?",
        options: ["Has cycles", "Connected and acyclic", "Disconnected", "Contains loops"],
        answer: 1
      },
      {
        question: "What is the handshaking lemma formula?",
        options: ["Sum of degrees = 2 x number of edges", "Sum of degrees = number of vertices", "Number of cycles = number of edges", "Sum of degrees = 0"],
        answer: 0
      },
      {
        question: "Which is a planar graph?",
        options: ["Can be drawn without edge crossings", "Has loops", "Has only cycles", "Is complete"],
        answer: 0
      },
      {
        question: "What is an Eulerian circuit?",
        options: ["A path passing each vertex once", "A cycle passing every edge once", "A cycle passing every vertex once", "Circuit passing every edge twice"],
        answer: 1
      },
      {
        question: "Which is not a valid set operation?",
        options: ["Union", "Intersection", "Division", "Symmetric difference"],
        answer: 2
      },
      {
        question: "If G is a graph with n vertices, maximum edges possible are?",
        options: ["n-1", "n(n-1)/2", "n(n+1)/2", "n^2"],
        answer: 1
      },
      {
        question: "A path graph is:",
        options: ["A cycle", "A straight chain of connected vertices", "A complete graph", "A star"],
        answer: 1
      },
      {
        question: "Which is a subgraph?",
        options: ["Part of a graph with some vertices/edges", "Disconnected graph", "Complete graph", "Power set of a graph"],
        answer: 0
      },
      {
        question: "Which is a cut-vertex?",
        options: ["Vertex whose removal increases the number of connected components", "Vertex of degree zero", "A leaf node", "A vertex with loops"],
        answer: 0
      },
      {
        question: "The complement of a graph G has:",
        options: ["All the edges of G", "None of the edges of G", "Edges not in G", "All loops"],
        answer: 2
      },
      {
        question: "Which property defines a regular graph?",
        options: ["All vertices have same degree", "Graph is disconnected", "Graph is bipartite", "Has cycles"],
        answer: 0
      },
      {
        question: "Which algorithm calculates minimum spanning tree?",
        options: ["Kruskal's", "Bellman-Ford", "Floyd-Warshall", "BFS"],
        answer: 0
      },
      {
        question: "Which logic operation outputs TRUE only if both inputs are TRUE?",
        options: ["OR", "AND", "NAND", "NOR"],
        answer: 1
      },
      {
        question: "A permutation is:",
        options: ["Arrangement of objects", "Combination of objects", "Sum of objects", "Subset of objects"],
        answer: 0
      },
      {
        question: "Which is the basic unit of graph theory?",
        options: ["Set", "Edge", "Vertex", "Tree"],
        answer: 2
      }
    ],
    hard: [
      {
        question: "The number of labeled trees possible with n vertices is:",
        options: ["n!", "2^n", "n^(n-2)", "n^2"],
        answer: 2
      },
      {
        question: "Which theorem states that a connected graph with all vertices of even degree has an Eulerian circuit?",
        options: ["Handshaking Lemma", "Kuratowski's theorem", "Euler's theorem", "Dirac's theorem"],
        answer: 2
      },
      {
        question: "Which type of graph is used to represent state transitions in automata?",
        options: ["Weighted graph", "Transition graph", "Complement graph", "Multigraph"],
        answer: 1
      },
      {
        question: "The minimum number of colors required to color a planar graph is:",
        options: ["2", "3", "4", "5"],
        answer: 2
      },
      {
        question: "Which algorithm determines articulation points in a graph?",
        options: ["DFS based algorithm", "BFS", "Dijkstra's", "Prim's"],
        answer: 0
      },
      {
        question: "Cayley's formula counts:",
        options: ["Number of spanning trees for complete graphs", "Number of cycles in a tree", "Number of eulerian circuits", "Number of connected graphs"],
        answer: 0
      },
      {
        question: "Which theorem characterizes planar graphs by forbidden subgraphs?",
        options: ["Euler's theorem", "Kuratowski's theorem", "Dirac's theorem", "Ramsey's theorem"],
        answer: 1
      },
      {
        question: "Which logic gate is universal?",
        options: ["XOR", "AND", "NAND", "OR"],
        answer: 2
      },
      {
        question: "What is the chromatic polynomial of a complete graph K_n?",
        options: ["n!", "x(x-1)...(x-n+1)", "n^x", "x^n"],
        answer: 1
      },
      {
        question: "A matching in a bipartite graph is:",
        options: ["Subset of edges no two of which share a vertex", "All edges", "Edges forming cycles", "Minimum spanning tree"],
        answer: 0
      },
      {
        question: "Which algorithm checks for cycles in a graph?",
        options: ["DFS", "Kruskal's", "Bellman-Ford", "Prim's"],
        answer: 0
      },
      {
        question: "In discrete math, a relation R on set A is transitive if:",
        options: ["aRb and bRc ⇒ aRc", "aRb and bRc ⇒ cRa", "aRb ⇒ bRa", "aRa for all a"],
        answer: 0
      },
      {
        question: "The adjacency matrix of a graph G allows which operation in O(1)?",
        options: ["Edge existence check", "Listing all neighbors", "Finding shortest path", "Checking for cycles"],
        answer: 0
      },
      {
        question: "A Hamiltonian graph contains:",
        options: ["A cycle passing each vertex exactly once", "A path passing all edges", "All vertices have degree zero", "Only trees"],
        answer: 0
      },
      {
        question: "How many non-isomorphic trees exist with 4 vertices?",
        options: ["1", "2", "3", "4"],
        answer: 1
      },
      {
        question: "Which statement describes a symmetric relation?",
        options: ["If aRb then bRa", "If aRa then bRb", "If aRb and bRc then aRc", "If aRa for all a"],
        answer: 0
      },
      {
        question: "How many edges does a tree with 12 vertices have?",
        options: ["13", "12", "11", "10"],
        answer: 2
      },
      {
        question: "What is a clique in a graph?",
        options: ["A complete subgraph", "An acyclic subgraph", "A tree", "A disconnected graph"],
        answer: 0
      },
      {
        question: "Ramsey number R(3,3) is:",
        options: ["3", "5", "6", "7"],
        answer: 2
      },
      {
        question: "What is the diameter of a graph?",
        options: ["Longest shortest path between any two vertices", "Number of vertices", "Sum of degrees", "Length of all cycles"],
        answer: 0
      }
    ]
  },
  // ...add other subject blocks below...

    JAVA: {
    easy: [
      {
        question: "Which keyword is used to inherit a class in Java?",
        options: ["extends", "implements", "inherits", "super"],
        answer: 0
      },
      {
        question: "What is the default value of an int in Java?",
        options: ["0", "null", "undefined", "1"],
        answer: 0
      },
      {
        question: "Which method is the entry point of a Java program?",
        options: ["start()", "init()", "main()", "run()"],
        answer: 2
      },
      {
        question: "Which of these is NOT a Java primitive type?",
        options: ["int", "String", "boolean", "char"],
        answer: 1
      },
      {
        question: "Which symbol is used for single-line comments in Java?",
        options: ["/* */", "//", "#", "<!-- -->"],
        answer: 1
      },
      {
        question: "Which company originally developed Java?",
        options: ["Microsoft", "Oracle", "Sun Microsystems", "IBM"],
        answer: 2
      },
      {
        question: "Which of the following is used to create an object in Java?",
        options: ["init", "new", "create", "object"],
        answer: 1
      },
      {
        question: "What is used to store multiple values of the same type in Java?",
        options: ["Var", "Array", "Package", "Class"],
        answer: 1
      },
      {
        question: "What is the file extension for a compiled Java class?",
        options: [".class", ".java", ".exe", ".jar"],
        answer: 0
      },
      {
        question: "Which loop executes at least once in Java?",
        options: ["for", "while", "do-while", "foreach"],
        answer: 2
      }
    ],
    medium: [
      {
        question: "Which keyword in Java is used to prevent method overriding?",
        options: ["final", "static", "const", "transient"],
        answer: 0
      },
      {
        question: "Which collection allows only unique elements and no duplicates?",
        options: ["List", "Set", "Map", "Queue"],
        answer: 1
      },
      {
        question: "What does JVM stand for?",
        options: ["Java Variable Method", "Java Virtual Machine", "Java Visual Model", "Java Version Manager"],
        answer: 1
      },
      {
        question: "Which interface does java.util.HashMap implement?",
        options: ["List", "Set", "Map", "Collection"],
        answer: 2
      },
      {
        question: "Which keyword is used to handle exceptions in Java?",
        options: ["catch", "throw", "handle", "finalize"],
        answer: 0
      },
      {
        question: "Which thread method pauses execution temporarily?",
        options: ["sleep()", "wait()", "pause()", "stop()"],
        answer: 0
      },
      {
        question: "Which of these is synchronized in Java?",
        options: ["ArrayList", "Vector", "HashSet", "HashMap"],
        answer: 1
      },
      {
        question: "Which operator is used for object reference comparison?",
        options: ["==", "equals()", "===", "compareTo()"],
        answer: 0
      },
      {
        question: "Which modifier makes a member accessible only within its class?",
        options: ["public", "private", "protected", "static"],
        answer: 1
      },
      {
        question: "Which package has the Random class?",
        options: ["java.lang", "java.util", "java.io", "java.sql"],
        answer: 1
      },
      {
        question: "Which data type can store the largest whole number?",
        options: ["int", "long", "short", "byte"],
        answer: 1
      },
      {
        question: "Which class is synchronized by default?",
        options: ["StringBuilder", "StringBuffer", "String", "char[]"],
        answer: 1
      },
      {
        question: "Which keyword creates a constant in Java?",
        options: ["final", "const", "static", "immutable"],
        answer: 0
      },
      {
        question: "Which block always executes regardless of exceptions?",
        options: ["try", "catch", "finally", "throw"],
        answer: 2
      },
      {
        question: "Which is the superclass of all classes in Java?",
        options: ["Super", "Object", "Base", "Class"],
        answer: 1
      },
      {
        question: "Which keyword explicitly calls a superclass constructor?",
        options: ["parent()", "base()", "super()", "this()"],
        answer: 2
      },
      {
        question: "What does JAR stand for in Java?",
        options: ["Java Archive", "Java App Runtime", "Java Application Resource", "Java Access Run"],
        answer: 0
      },
      {
        question: "Which class is used to read console input?",
        options: ["Scanner", "Reader", "ConsoleReader", "System"],
        answer: 0
      },
      {
        question: "Which annotation indicates method overrides superclass method?",
        options: ["@Over", "@Override", "@Overridden", "@MethodOverride"],
        answer: 1
      },
      {
        question: "What is the default package for Java classes?",
        options: ["java.lang", "java.util", "java.default", "none"],
        answer: 0
      }
    ],
    hard: [
      {
        question: "Which GC runs without stopping applications?",
        options: ["Mark and Sweep", "Concurrent Mark-Sweep", "Stop-the-world GC", "Reference Counting"],
        answer: 1
      },
      {
        question: "Which class loader loads Java core API classes?",
        options: ["Bootstrap ClassLoader", "System ClassLoader", "Extension ClassLoader", "App ClassLoader"],
        answer: 0
      },
      {
        question: "Which memory area stores class-level metadata?",
        options: ["Heap", "Stack", "Metaspace", "Code Cache"],
        answer: 2
      },
      {
        question: "Which design pattern ensures only one instance exists?",
        options: ["Factory", "Singleton", "Builder", "Prototype"],
        answer: 1
      },
      {
        question: "Which Java version introduced 'var' keyword?",
        options: ["Java 8", "Java 9", "Java 10", "Java 11"],
        answer: 2
      },
      {
        question: "Which GC is optimized for large heaps?",
        options: ["G1", "Serial GC", "Parallel GC", "Epsilon GC"],
        answer: 0
      },
      {
        question: "Which keyword can make a class immutable?",
        options: ["final", "abstract", "immutable", "const"],
        answer: 0
      },
      {
        question: "What type of reference does WeakHashMap use?",
        options: ["WeakReference", "SoftReference", "PhantomReference", "StrongReference"],
        answer: 0
      },
      {
        question: "Which Java 8 feature helps handle null gracefully?",
        options: ["Optional", "NullHandler", "Maybe", "Nullable"],
        answer: 0
      },
      {
        question: "Which tool monitors JVM in real-time?",
        options: ["jconsole", "jstat", "jmap", "jvisualvm"],
        answer: 3
      },
      {
        question: "Which keyword is not allowed for default interface methods?",
        options: ["public", "private", "abstract", "default"],
        answer: 2
      },
      {
        question: "Default priority for a Java thread?",
        options: ["1", "5", "10", "0"],
        answer: 1
      },
      {
        question: "Which module system came in Java 9?",
        options: ["JPMS", "OSGi", "ModuleFX", "ModSys"],
        answer: 0
      },
      {
        question: "Time complexity of searching in HashMap?",
        options: ["O(n)", "O(1)", "O(log n)", "O(n log n)"],
        answer: 1
      },
      {
        question: "Parent class of all exceptions?",
        options: ["Throwable", "Exception", "RuntimeException", "Error"],
        answer: 0
      },
      {
        question: "Most restrictive access modifier?",
        options: ["private", "default", "protected", "public"],
        answer: 0
      },
      {
        question: "Which ExecutorService method stops new tasks?",
        options: ["shutdownNow()", "terminate()", "shutdown()", "stop()"],
        answer: 2
      },
      {
        question: "Keyword to avoid serialization of variable?",
        options: ["transient", "static", "final", "volatile"],
        answer: 0
      },
      {
        question: "Immutable arbitrary-precision decimal numbers class?",
        options: ["Decimal", "BigDecimal", "BigInteger", "Number"],
        answer: 1
      },
      {
        question: "Which method is called before GC?",
        options: ["close()", "finalize()", "dispose()", "destroy()"],
        answer: 1
      }
    ]
  },
  PYTHON: {
  easy: [
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["func", "def", "function", "lambda"],
      answer: 1
    },
    {
      question: "What is the output of print(2 + 3)?",
      options: ["23", "5", "2+3", "Error"],
      answer: 1
    },
    {
      question: "Which of these is a valid variable name?",
      options: ["2value", "value_2", "value-2", "value 2"],
      answer: 1
    },
    {
      question: "Which data type is used to store text in Python?",
      options: ["int", "float", "str", "bool"],
      answer: 2
    },
    {
      question: "What does len([10, 20, 30]) return?",
      options: ["10", "3", "30", "Error"],
      answer: 1
    },
    {
      question: "Which statement is used for output in Python?",
      options: ["echo", "print", "write", "output"],
      answer: 1
    },
    {
      question: "How do you start a comment in Python?",
      options: ["//", "--", "#", "/*"],
      answer: 2
    },
    {
      question: "How do you represent boolean True in Python?",
      options: ["true", "True", "TRUE", "1"],
      answer: 1
    },
    {
      question: "Which symbol is used for exponentiation (power) in Python?",
      options: ["^", "**", "pow", "//"],
      answer: 1
    },
    {
      question: "Which function converts a value to an integer?",
      options: ["toInt()", "integer()", "int()", "num()"],
      answer: 2
    }
  ],
  medium: [
    {
      question: "Which keyword is used to handle exceptions in Python?",
      options: ["catch", "except", "try", "finally"],
      answer: 1
    },
    {
      question: "What is the output of print('A' * 3)?",
      options: ["AAA", "A3", "Error", "'A3'"],
      answer: 0
    },
    {
      question: "How is a dictionary defined in Python?",
      options: ["[ ]", "( )", "{ }", "< >"],
      answer: 2
    },
    {
      question: "Which method adds an item to the end of a list?",
      options: ["add()", "append()", "insert()", "extend()"],
      answer: 1
    },
    {
      question: "What is a lambda function?",
      options: ["A loop", "A variable", "An anonymous function", "A class"],
      answer: 2
    },
    {
      question: "Which function returns the type of a variable?",
      options: ["typeof()", "type()", "varType()", "gettype()"],
      answer: 1
    },
    {
      question: "How do you import a module in Python?",
      options: ["import module", "using module", "require module", "include module"],
      answer: 0
    },
    {
      question: "What is the output of list(range(3))?",
      options: ["[0, 1, 2]", "[1, 2, 3]", "[0, 1, 2, 3]", "[3]"],
      answer: 0
    },
    {
      question: "How do you open a file for writing?",
      options: ["open(filename, 'w')", "file(filename, 'w')", "open(filename, 'write')", "write(filename)"],
      answer: 0
    },
    {
      question: "Which of these is not a built-in Python data type?",
      options: ["list", "tuple", "heap", "set"],
      answer: 2
    },
    {
      question: "What does 'pass' do in Python?",
      options: ["Ends loop", "Placeholder for future code", "Throws error", "Does calculation"],
      answer: 1
    },
    {
      question: "Which function can be used for user input?",
      options: ["scan()", "input()", "readline()", "get()"],
      answer: 1
    },
    {
      question: "Difference between list and tuple?",
      options: ["List is mutable, tuple is immutable", "Tuple can be changed, list cannot", "Both are mutable", "Both are immutable"],
      answer: 0
    },
    {
      question: "What is used to define a class in Python?",
      options: ["def", "function", "class", "object"],
      answer: 2
    },
    {
      question: "Which operator is used for floor division?",
      options: ["/", "//", "%", "**"],
      answer: 1
    },
    {
      question: "How is inheritance achieved in Python?",
      options: ["Using extends", "Using super()", "Using class parameters", "Using inherit"],
      answer: 2
    },
    {
      question: "What is the output of bool([])?",
      options: ["True", "False", "Error", "None"],
      answer: 1
    },
    {
      question: "Which function returns the absolute value?",
      options: ["abs()", "absolute()", "fabs()", "value()"],
      answer: 0
    },
    {
      question: "What does enumerate() return?",
      options: ["Indexes and values", "Sorted list", "Maximum value", "None"],
      answer: 0
    },
    {
      question: "How do you install external packages?",
      options: ["pip install package", "install package", "include package", "import package"],
      answer: 0
    }
  ],
  hard: [
    {
      question: "Which method converts a string to a list based on a separator?",
      options: ["split()", "partition()", "join()", "slice()"],
      answer: 0
    },
    {
      question: "What is the output of {x for x in range(5)}?",
      options: ["Set {0, 1, 2, 3, 4}", "List [0,1,2,3,4]", "Tuple (0,1,2,3,4)", "Dictionary with numbers"],
      answer: 0
    },
    {
      question: "How do you create a generator function?",
      options: ["Using yield keyword", "Using return keyword", "Using lambda", "Using generate keyword"],
      answer: 0
    },
    {
      question: "Which library is used for numerical computing?",
      options: ["os", "numpy", "random", "math"],
      answer: 1
    },
    {
      question: "In OOP, what is polymorphism?",
      options: ["One function, multiple forms", "Function cannot be overloaded", "Only one method per class", "None of above"],
      answer: 0
    },
    {
      question: "What does @staticmethod decorator do?",
      options: ["Marks a method as belonging to a class only", "Makes function static", "Allows access without object", "All of above"],
      answer: 2
    },
    {
      question: "Which method returns all keys in a dictionary?",
      options: ["keys()", "get()", "items()", "allkeys()"],
      answer: 0
    },
    {
      question: "Which error occurs when index is out of range in a list?",
      options: ["TypeError", "ValueError", "IndexError", "KeyError"],
      answer: 2
    },
    {
      question: "What is the output of list(map(lambda x:x*x, [1,2,3]))?",
      options: ["[1,2,3]", "[1, 4, 9]", "[2,4,6]", "[1,16,81]"],
      answer: 1
    },
    {
      question: "Which module is used to work with JSON data?",
      options: ["json", "csv", "pickle", "xml"],
      answer: 0
    },
    {
      question: "What does 'self' refer to in Python class methods?",
      options: ["Current object", "Parent class", "Global variable", "Static method"],
      answer: 0
    },
    {
      question: "Which keyword is used to define an abstract class?",
      options: ["abstract", "ABC", "class", "base"],
      answer: 1
    },
    {
      question: "How do you manage dependencies and environments in Python?",
      options: ["venv and pip", "npm", "make", "install"],
      answer: 0
    },
    {
      question: "Python's function annotations are used for:",
      options: ["Type hints", "Default values", "Return values only", "Variable names"],
      answer: 0
    },
    {
      question: "Which protocol allows overloading mathematical operators?",
      options: ["__add__ and other dunder methods", "super()", "staticmethod", "__main__"],
      answer: 0
    },
    {
      question: "Which function is used to read all lines from a file?",
      options: ["readlines()", "read()", "getline()", "fetch()"],
      answer: 0
    },
    {
      question: "What is the difference between shallow copy and deep copy?",
      options: ["Shallow copies only references; deep copies objects recursively", "No difference", "Deep copy copies references; shallow copies objects", "Shallow copy copies class only"],
      answer: 0
    },
    {
      question: "What does __init__.py file do?",
      options: ["Marks a folder as a Python package", "Initializes main function", "Imports all modules", "Generates documentation"],
      answer: 0
    },
    {
      question: "How do you handle multiple exceptions at once?",
      options: ["Using except (Exception1, Exception2): ...", "Using multiple except blocks only", "Try in try block", "Not possible"],
      answer: 0
    },
    {
      question: "Which tool is recommended for unit testing in Python?",
      options: ["unittest", "pytest", "nose", "All of the above"],
      answer: 3
    }
  ]
},
ADSA: {
  easy: [
    {
      question: "Which data structure uses FIFO (First In, First Out)?",
      options: ["Stack", "Queue", "Array", "Tree"],
      answer: 1
    },
    {
      question: "What is the worst-case time complexity for searching in a sorted array using binary search?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      answer: 1
    },
    {
      question: "Which data structure works on LIFO (Last In, First Out) principle?",
      options: ["Queue", "Heap", "Stack", "Linked List"],
      answer: 2
    },
    {
      question: "Which traversal in a binary tree visits root node first?",
      options: ["Inorder", "Preorder", "Postorder", "Level order"],
      answer: 1
    },
    {
      question: "Which is not a linear data structure?",
      options: ["Array", "Linked List", "Tree", "Stack"],
      answer: 2
    },
    {
      question: "Which sorting algorithm is stable?",
      options: ["Quick Sort", "Bubble Sort", "Heap Sort", "Selection Sort"],
      answer: 1
    },
    {
      question: "What is the maximum number of children a binary tree node can have?",
      options: ["1", "2", "3", "4"],
      answer: 1
    },
    {
      question: "Which is a non-primitive data structure?",
      options: ["Float", "Boolean", "List", "Char"],
      answer: 2
    },
    {
      question: "Which operation inserts at the end of an array?",
      options: ["Push", "Insert", "Append", "Enqueue"],
      answer: 2
    },
    {
      question: "Which structure is best for implementing recursion?",
      options: ["Queue", "Stack", "Array", "List"],
      answer: 1
    }
  ],
  medium: [
    {
      question: "Which data structure is used for BFS (Breadth First Search) in graphs?",
      options: ["Stack", "Queue", "Priority Queue", "Heap"],
      answer: 1
    },
    {
      question: "What is the time complexity to insert in a balanced binary search tree?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n log n)"],
      answer: 1
    },
    {
      question: "Which data structure provides fast minimum extraction?",
      options: ["Max Heap", "Min Heap", "BST", "Linked List"],
      answer: 1
    },
    {
      question: "What is a hash table mainly used for?",
      options: ["Sorting", "Searching", "Insertion", "Mapping keys to values"],
      answer: 3
    },
    {
      question: "What is the algorithmic paradigm of Merge Sort?",
      options: ["Greedy", "Divide and Conquer", "Dynamic Programming", "Backtracking"],
      answer: 1
    },
    {
      question: "In a doubly linked list, each node contains:",
      options: ["One pointer", "Two pointers", "No pointers", "Three pointers"],
      answer: 1
    },
    {
      question: "Which algorithm is used for finding shortest paths from a single source in a graph with negative weights?",
      options: ["Dijkstra's", "Bellman-Ford", "Floyd-Warshall", "Prim's"],
      answer: 1
    },
    {
      question: "Red-Black Tree is a type of:",
      options: ["Heap", "Balanced BST", "Graph", "Queue"],
      answer: 1
    },
    {
      question: "Which data structure is best for implementing undo operations?",
      options: ["Queue", "Stack", "Deque", "Heap"],
      answer: 1
    },
    {
      question: "Which structure allows constant time access by index?",
      options: ["Linked List", "Array", "Tree", "Queue"],
      answer: 1
    },
    {
      question: "AVL Tree maintains balance by:",
      options: ["Rotation", "Splitting", "Insertion only", "Heapify"],
      answer: 0
    },
    {
      question: "What is a circular queue?",
      options: ["Queue where rear connects front", "Stack with circular push", "Heap with round traversal", "Tree with circular edges"],
      answer: 0
    },
    {
      question: "Which traversal of BST yields sorted order?",
      options: ["Preorder", "Inorder", "Postorder", "Level order"],
      answer: 1
    },
    {
      question: "What is the load factor in hashing?",
      options: ["Table size / number of items", "Number of items / table size", "Hash collisions", "Hash length"],
      answer: 1
    },
    {
      question: "A trie is used for:",
      options: ["Searching", "Text processing", "Prefix matching", "All of the above"],
      answer: 3
    },
    {
      question: "Which data structure supports fast access to the k-th largest element?",
      options: ["Heap", "BST with augmentation", "Queue", "Trie"],
      answer: 1
    },
    {
      question: "Which structure is best for implementing a priority queue?",
      options: ["Array", "Stack", "Heap", "Trie"],
      answer: 2
    },
    {
      question: "Suffix tree is used in:",
      options: ["String matching", "Sorting", "Tree traversal", "Hashing"],
      answer: 0
    },
    {
      question: "Space complexity of merge sort is:",
      options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
      answer: 2
    },
    {
      question: "Which algorithm uses memoization?",
      options: ["Dynamic Programming", "Greedy", "Divide and Conquer", "Backtracking"],
      answer: 0
    }
  ],
  hard: [
    {
      question: "What is the amortized time complexity for adding an item to a dynamic array?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: 0
    },
    {
      question: "Tarjan's algorithm is used for:",
      options: ["Finding strongly connected components", "Minimum spanning tree", "Shortest path", "Planarity testing"],
      answer: 0
    },
    {
      question: "Which structure is used in Edmonds-Karp algorithm?",
      options: ["Stack", "Queue", "Heap", "Graph adjacency list"],
      answer: 1
    },
    {
      question: "If a red-black tree has n nodes, its height is:",
      options: ["O(n)", "O(log n)", "O(sqrt(n))", "O(n^2)"],
      answer: 1
    },
    {
      question: "A splay tree operation complexity in worst case is:",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      answer: 2
    },
    {
      question: "Johnson's algorithm finds:",
      options: ["All pairs shortest path", "Minimum cut", "All spanning trees", "Maximum flow"],
      answer: 0
    },
    {
      question: "A Fibonacci heap provides which operation in amortized O(1) time?",
      options: ["Insert", "Extract-Min", "Decrease-Key", "Delete"],
      answer: 2
    },
    {
      question: "Which step is key to quicksort's partition?",
      options: ["Choosing a pivot", "Merging arrays", "Heapify", "Memoization"],
      answer: 0
    },
    {
      question: "Closest pair of points in plane can be found in O(n log n) by:",
      options: ["Brute force", "Divide and conquer", "Greedy", "Dynamic programming"],
      answer: 1
    },
    {
      question: "Manacher’s algorithm is used for:",
      options: ["Finding palindrome substrings", "Sorting trie's keys", "Suffix array building", "Matching regular expressions"],
      answer: 0
    },
    {
      question: "KMP algorithm preprocesses the pattern in:",
      options: ["O(n)", "O(m)", "O(nm)", "O(log n)"],
      answer: 1
    },
    {
      question: "Which is true about B-Trees?",
      options: ["Multilevel index structure", "Binary nodes only", "Used in network graphs", "Cannot be balanced"],
      answer: 0
    },
    {
      question: "Hopcroft-Karp algorithm is associated with:",
      options: ["Maximum matching in bipartite graphs", "Shortest path", "Suffix tree", "Priority queue"],
      answer: 0
    },
    {
      question: "What is the advantage of segment trees?",
      options: ["Range queries/updates efficiently", "Sorts data faster", "Supports only point queries", "Low memory usage"],
      answer: 0
    },
    {
      question: "Which data structure is best for Undo/Redo stacks?",
      options: ["Deque", "Priority Queue", "Stack", "Queue"],
      answer: 2
    },
    {
      question: "The space complexity of Dijkstra’s algorithm using adjacency list is?",
      options: ["O(V+E)", "O(V^2)", "O(E)", "O(V)"],
      answer: 0
    },
    {
      question: "What does Rabin-Karp algorithm use to speed up matching?",
      options: ["Hashing", "Trie", "Prefix sum", "Suffix array"],
      answer: 0
    },
    {
      question: "Dynamic programming is preferred when:",
      options: ["Overlapping subproblems occur", "No recursion", "No optimal substructure", "Sorting data"],
      answer: 0
    },
    {
      question: "Which structure enables O(1) median finding?",
      options: ["Balanced BSTs with augmentation", "Heap with two halves", "Trie with counters", "Stack"],
      answer: 1
    },
    {
      question: "Which algorithm finds articulation points?",
      options: ["DFS-based", "Breadth first search", "Heapify", "Dynamic programming"],
      answer: 0
    }
  ]
},
GENERALKNOWLEDGE: {
  easy: [
    {
      question: "Who is known as the Father of the Nation in India?",
      options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Dr. Ambedkar"],
      answer: 1
    },
    {
      question: "What is the capital of France?",
      options: ["Madrid", "Paris", "Rome", "London"],
      answer: 1
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      answer: 1
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["William Wordsworth", "William Shakespeare", "Charles Dickens", "Jane Austen"],
      answer: 1
    },
    {
      question: "Which is the largest ocean in the world?",
      options: ["Indian Ocean", "Arctic Ocean", "Atlantic Ocean", "Pacific Ocean"],
      answer: 3
    },
    {
      question: "Who discovered gravity?",
      options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
      answer: 1
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H", "O2", "CO2", "H2O"],
      answer: 3
    },
    {
      question: "Which animal is known as the King of the Jungle?",
      options: ["Tiger", "Lion", "Elephant", "Cheetah"],
      answer: 1
    },
    {
      question: "Who was the first President of India?",
      options: ["Dr. Rajendra Prasad", "Sarvepalli Radhakrishnan", "Indira Gandhi", "Jawaharlal Nehru"],
      answer: 0
    },
    {
      question: "Which country is famous for the pyramids?",
      options: ["Peru", "Egypt", "Mexico", "Italy"],
      answer: 1
    }
  ],
  medium: [
    {
      question: "What is the currency of Japan?",
      options: ["Yuan", "Yen", "Won", "Dollar"],
      answer: 1
    },
    {
      question: "What is the national flower of India?",
      options: ["Lotus", "Rose", "Jasmine", "Sunflower"],
      answer: 0
    },
    {
      question: "The Nobel Prize is not awarded for which field?",
      options: ["Peace", "Literature", "Mathematics", "Chemistry"],
      answer: 2
    },
    {
      question: "Which is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      answer: 1
    },
    {
      question: "Who invented the telephone?",
      options: ["Alexander Graham Bell", "Thomas Edison", "Michael Faraday", "Nikola Tesla"],
      answer: 0
    },
    {
      question: "Which Indian state is the largest by area?",
      options: ["Uttar Pradesh", "Maharashtra", "Rajasthan", "Madhya Pradesh"],
      answer: 2
    },
    {
      question: "Who is the current UN Secretary-General (2023)?",
      options: ["Ban Ki-moon", "Antonio Guterres", "Kofi Annan", "Boutros Boutros-Ghali"],
      answer: 1
    },
    {
      question: "What is the hardest natural substance?",
      options: ["Iron", "Diamond", "Gold", "Platinum"],
      answer: 1
    },
    {
      question: "What is the study of plants called?",
      options: ["Botany", "Zoology", "Geology", "Ecology"],
      answer: 0
    },
    {
      question: "Which is the smallest continent by area?",
      options: ["Antarctica", "Europe", "Australia", "South America"],
      answer: 2
    },
    {
      question: "Who is known for developing the polio vaccine?",
      options: ["Edward Jenner", "Louis Pasteur", "Jonas Salk", "Alexander Fleming"],
      answer: 2
    },
    {
      question: "Rupee is the currency of which South Asian country besides India?",
      options: ["Nepal", "Thailand", "Malaysia", "Bangladesh"],
      answer: 0
    },
    {
      question: "Which organ purifies our blood?",
      options: ["Heart", "Liver", "Kidney", "Pancreas"],
      answer: 2
    },
    {
      question: "Who painted the 'Mona Lisa'?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Michelangelo", "Pablo Picasso"],
      answer: 1
    },
    {
      question: "Which gas is most abundant in Earth's atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      answer: 1
    },
    {
      question: "Capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      answer: 2
    },
    {
      question: "What is the largest gland in the human body?",
      options: ["Kidney", "Liver", "Pancreas", "Heart"],
      answer: 1
    },
    {
      question: "Which sport is associated with Wimbledon?",
      options: ["Cricket", "Football", "Tennis", "Golf"],
      answer: 2
    },
    {
      question: "Who discovered penicillin?",
      options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Joseph Lister"],
      answer: 1
    },
    {
      question: "Which acid is present in lemon?",
      options: ["Acetic acid", "Citric acid", "Lactic acid", "Carbonic acid"],
      answer: 1
    }
  ],
  hard: [
    {
      question: "What is the SI unit of force?",
      options: ["Newton", "Joule", "Pascal", "Watt"],
      answer: 0
    },
    {
      question: "Who wrote India's national anthem?",
      options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Subhas Chandra Bose"],
      answer: 1
    },
    {
      question: "Which year did World War II end?",
      options: ["1942", "1945", "1950", "1939"],
      answer: 1
    },
    {
      question: "Which Nobel laureate coined 'Mahātmā' for Gandhi?",
      options: ["Leo Tolstoy", "Rabindranath Tagore", "Mother Teresa", "Nelson Mandela"],
      answer: 1
    },
    {
      question: "In computers, what does 'CPU' stand for?",
      options: ["Central Process Unit", "Central Processing Unit", "Computer Processing Unit", "Control Processing Unit"],
      answer: 1
    },
    {
      question: "Which river is the lifeline of Egypt?",
      options: ["Amazon", "Ganges", "Nile", "Yangtze"],
      answer: 2
    },
    {
      question: "Where is the Great Barrier Reef?",
      options: ["Africa", "Australia", "North America", "Asia"],
      answer: 1
    },
    {
      question: "Who was India's first woman Prime Minister?",
      options: ["Indira Gandhi", "Sonia Gandhi", "Pratibha Patil", "Maneka Gandhi"],
      answer: 0
    },
    {
      question: "Which is the longest bone in the human body?",
      options: ["Tibia", "Femur", "Humerus", "Fibula"],
      answer: 1
    },
    {
      question: "Which element has the chemical symbol 'Na'?",
      options: ["Nitrogen", "Sodium", "Neon", "Nickel"],
      answer: 1
    },
    {
      question: "Which country hosted the 2016 Summer Olympics?",
      options: ["China", "Brazil", "UK", "Japan"],
      answer: 1
    },
    {
      question: "What is the main language of Brazil?",
      options: ["Spanish", "French", "Portuguese", "English"],
      answer: 2
    },
    {
      question: "Which scientist proposed the three laws of motion?",
      options: ["Einstein", "Newton", "Galileo", "Darwin"],
      answer: 1
    },
    {
      question: "Who won the first ICC Cricket World Cup?",
      options: ["Australia", "India", "West Indies", "England"],
      answer: 2
    },
    {
      question: "Which is the largest desert in the world?",
      options: ["Gobi", "Sahara", "Arctic", "Antarctic"],
      answer: 3
    },
    {
      question: "What is the deepest point in Earth's oceans?",
      options: ["Mariana Trench", "Java Trench", "Puerto Rico Trench", "Tonga Trench"],
      answer: 0
    },
    {
      question: "What is the highest civilian award in India?",
      options: ["Bharat Ratna", "Padma Vibhushan", "Padma Shri", "Param Vir Chakra"],
      answer: 0
    },
    {
      question: "Who is called the Missile Man of India?",
      options: ["Homi Bhabha", "Vikram Sarabhai", "A. P. J. Abdul Kalam", "Satish Dhawan"],
      answer: 2
    },
    {
      question: "Which metal is liquid at room temperature?",
      options: ["Gold", "Mercury", "Iron", "Copper"],
      answer: 1
    },
    {
      question: "Who founded the Maurya Empire?",
      options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Harsha"],
      answer: 1
    }
  ]
},
DLCO: {
  easy: [
    {
      question: "Which number system uses only 0 and 1?",
      options: ["Decimal", "Octal", "Binary", "Hexadecimal"],
      answer: 2
    },
    {
      question: "What is the result of 1 AND 0 in Boolean logic?",
      options: ["0", "1", "Undefined", "Error"],
      answer: 0
    },
    {
      question: "Which gate outputs 1 only if inputs are different?",
      options: ["AND", "OR", "XOR", "NAND"],
      answer: 2
    },
    {
      question: "Which logic gate has the output NOT of input?",
      options: ["OR", "AND", "NOT", "NOR"],
      answer: 2
    },
    {
      question: "A byte consists of how many bits?",
      options: ["4", "8", "16", "32"],
      answer: 1
    },
    {
      question: "Which device stores data permanently?",
      options: ["RAM", "ROM", "Cache", "Register"],
      answer: 1
    },
    {
      question: "Which symbol represents an OR gate in digital circuits?",
      options: ["+", "•", "-", "*"],
      answer: 0
    },
    {
      question: "What type of flip-flop changes on clock edge?",
      options: ["D", "SR", "JK", "All of the above"],
      answer: 3
    },
    {
      question: "Which is a combinational circuit?",
      options: ["Counter", "Multiplexer", "Register", "Flip-Flop"],
      answer: 1
    },
    {
      question: "What does ALU stand for in computer architecture?",
      options: ["Arithmetic Logic Unit", "Advanced Link Unit", "Array Logical Unit", "Access Logic Unit"],
      answer: 0
    }
  ],
  medium: [
    {
      question: "A full adder has how many inputs?",
      options: ["1", "2", "3", "4"],
      answer: 2
    },
    {
      question: "How many select lines does an 8-to-1 multiplexer use?",
      options: ["1", "2", "3", "4"],
      answer: 2
    },
    {
      question: "Which expression is equivalent to the NOR gate?",
      options: ["NOT(AND)", "NOT(OR)", "OR", "AND"],
      answer: 1
    },
    {
      question: "What is the hexadecimal equivalent of binary 1101?",
      options: ["B", "C", "D", "E"],
      answer: 2
    },
    {
      question: "Which component stores the next instruction address?",
      options: ["Program Counter", "MAR", "ACC", "MDR"],
      answer: 0
    },
    {
      question: "What is the purpose of cache memory?",
      options: ["Store permanent data", "Increase speed by storing frequently used data", "Run programs", "Reduce RAM usage"],
      answer: 1
    },
    {
      question: "In two’s complement, negative numbers are represented by:",
      options: ["Direct binary", "Inverse binary", "Complement plus one", "Hexadecimal format"],
      answer: 2
    },
    {
      question: "What does a flip-flop store?",
      options: ["Instruction", "Bit", "Byte", "Nibble"],
      answer: 1
    },
    {
      question: "What is fan-out in digital circuits?",
      options: ["Number of inputs to a gate", "Number of outputs a gate can drive", "Number of gates in series", "Current supplied"],
      answer: 1
    },
    {
      question: "A register consists of:",
      options: ["Multiple flip-flops", "Single multiplexer", "Single decoder", "Single gate"],
      answer: 0
    },
    {
      question: "Which protocol is used for basic data transfer between CPU and memory?",
      options: ["Handshake", "Bus", "Control", "Transfer"],
      answer: 1
    },
    {
      question: "SR flip-flop is called:",
      options: ["Set-Reset", "Shift Register", "Static Register", "Series Register"],
      answer: 0
    },
    {
      question: "How many address lines does a 4K memory have?",
      options: ["10", "12", "8", "16"],
      answer: 1
    },
    {
      question: "Which type of ROM can be programmed by the user?",
      options: ["PROM", "Static ROM", "Dynamic ROM", "DRAM"],
      answer: 0
    },
    {
      question: "Which type of counter counts up and down?",
      options: ["Ring", "Up-down", "Johnson", "Ripple"],
      answer: 1
    },
    {
      question: "Instruction cycle in CPU includes:",
      options: ["Fetch and Decode", "Only Fetch", "Execute only", "Store only"],
      answer: 0
    },
    {
      question: "BCD stands for:",
      options: ["Binary Counter Decoder", "Binary Coded Decimal", "Bit Combination Decoder", "Basic Code Decoder"],
      answer: 1
    },
    {
      question: "Which is not a sequential circuit?",
      options: ["Counter", "Multiplexer", "Shift Register", "Flip-Flop"],
      answer: 1
    },
    {
      question: "Which logic family uses least power?",
      options: ["TTL", "CMOS", "ECL", "DTL"],
      answer: 1
    },
    {
      question: "What is pipelining in CPU?",
      options: ["Increasing clock speed", "Concurrent instruction execution", "Reducing memory usage", "Increasing cache size"],
      answer: 1
    }
  ],
  hard: [
    {
      question: "Which address mode uses value stored in address as actual operand?",
      options: ["Immediate", "Direct", "Indirect", "Indexed"],
      answer: 2
    },
    {
      question: "What is hazard in pipeline architecture?",
      options: ["A logical error in CPU", "Interference causing incorrect instruction execution", "Increased speed", "Static memory usage"],
      answer: 1
    },
    {
      question: "Booth's Algorithm is used for:",
      options: ["Division", "Multiplication", "Exponentiation", "Sorting"],
      answer: 1
    },
    {
      question: "Which technique enables multiple devices to share the same bus?",
      options: ["Bus Arbitration", "Multiplexing", "Buffering", "Encoding"],
      answer: 0
    },
    {
      question: "Which diagram represents logic circuits?",
      options: ["Truth Table", "Logic Diagram", "Timing Diagram", "Flow Chart"],
      answer: 1
    },
    {
      question: "Von Neumann architecture features:",
      options: ["Separate memory for instructions and data", "Single memory for instructions and data", "Exclusive cache memory", "Optical memory only"],
      answer: 1
    },
    {
      question: "Carry Lookahead Adder improves speed by:",
      options: ["Parallel carry computation", "Serial computation", "Bitwise addition", "Increasing clock frequency"],
      answer: 0
    },
    {
      question: "In microprogrammed control, instructions are represented by:",
      options: ["Microinstructions", "Machine code", "Opcodes", "User code"],
      answer: 0
    },
    {
      question: "Which instruction causes branching in programs?",
      options: ["MOV", "ADD", "JMP", "SUB"],
      answer: 2
    },
    {
      question: "A PLA (Programmable Logic Array) can implement:",
      options: ["Any logic function", "Only AND functions", "Only OR functions", "Only NOT functions"],
      answer: 0
    },
    {
      question: "Which memory type is both non-volatile and rewritable?",
      options: ["ROM", "RAM", "EPROM", "Cache"],
      answer: 2
    },
    {
      question: "Which gate is universal and can implement any logic circuit?",
      options: ["OR", "XOR", "NAND", "NOR"],
      answer: 2
    },
    {
      question: "What is the main advantage of Harvard architecture?",
      options: ["Single bus", "Separate buses for data and instructions", "Less complex", "Higher clock speed"],
      answer: 1
    },
    {
      question: "Which counter cycles through only one bit set per state?",
      options: ["Ring", "Johnson", "Ripple", "Up-down"],
      answer: 0
    },
    {
      question: "What does the term 'fan-in' refer to?",
      options: ["Number of gates a signal goes to", "Number of inputs per gate", "Number of outputs from gate", "Number of flip-flops"],
      answer: 1
    },
    {
      question: "Micro-operations are:",
      options: ["Atomic operations at hardware level", "Jumps between functions", "Software instructions", "Error codes"],
      answer: 0
    },
    {
      question: "What kind of hazards does pipeline suffer from?",
      options: ["Data, Control, Structural", "Logical, Temporal, Address", "Cache, Bus, Data", "Power, Signal, Fetch"],
      answer: 0
    },
    {
      question: "Which diagram shows sequence of operations over time?",
      options: ["Logic", "Timing", "Truth table", "Memory map"],
      answer: 1
    },
    {
      question: "In Karnaugh map, minimum grouping possible is:",
      options: ["1 cell", "2 cells", "4 cells", "8 cells"],
      answer: 1
    },
    {
      question: "Which technique prevents memory access conflicts?",
      options: ["Interleaving", "Parallelism", "Serial access", "Pipelining"],
      answer: 0
    }
  ]
},

};
