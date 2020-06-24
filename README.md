<a name="BitManipulator"></a>

## BitManipulator
Stores a 31-bit positive integer with the possibility to read and set every single bit value.
Boolean values can be stored in bits from 1 to 31 (inclusive).

**Kind**: global class  

* [BitManipulator](#BitManipulator)
    * [new BitManipulator([initial])](#new_BitManipulator_new)
    * _instance_
        * [.number](#BitManipulator+number)
        * [.bitString([bitsToShow])](#BitManipulator+bitString) ⇒ <code>string</code>
        * [.set(bit, value)](#BitManipulator+set)
        * [.get(bit)](#BitManipulator+get) ⇒ <code>boolean</code>
    * _static_
        * [.MAX_BIT](#BitManipulator.MAX_BIT)
        * [.MIN_BIT](#BitManipulator.MIN_BIT)
        * [.MAX_INT](#BitManipulator.MAX_INT)
        * [.MIN_INT](#BitManipulator.MIN_INT)

<a name="new_BitManipulator_new"></a>

### new BitManipulator([initial])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [initial] | <code>number</code> | <code>0</code> | Optional integer for reading and setting bit values. |

<a name="BitManipulator+number"></a>

### bitManipulator.number
Integer to set and read from.

**Kind**: instance property of [<code>BitManipulator</code>](#BitManipulator)  
<a name="BitManipulator+bitString"></a>

### bitManipulator.bitString([bitsToShow]) ⇒ <code>string</code>
Returns a string representation of currently stored bit.

**Kind**: instance method of [<code>BitManipulator</code>](#BitManipulator)  

| Param | Type | Description |
| --- | --- | --- |
| [bitsToShow] | <code>number</code> | Number of bits to show. |

<a name="BitManipulator+set"></a>

### bitManipulator.set(bit, value)
Sets required bit to a given value. Returns nothing.
Bits are numbered from right to left, starting from 1, so:
`...100101` will be numbered: `...654321`

**Kind**: instance method of [<code>BitManipulator</code>](#BitManipulator)  

| Param | Type | Description |
| --- | --- | --- |
| bit | <code>number</code> | Bit to be set. |
| value | <code>boolean</code> | Boolean value to set the bit to. |

<a name="BitManipulator+get"></a>

### bitManipulator.get(bit) ⇒ <code>boolean</code>
Gets the value of a given bit.
Bits are numbered from right to left, starting from 1, so:
`...100101` will be numbered: `...654321`

**Kind**: instance method of [<code>BitManipulator</code>](#BitManipulator)  

| Param | Type | Description |
| --- | --- | --- |
| bit | <code>number</code> | Bit to read the value from. |

<a name="BitManipulator.MAX_BIT"></a>

### BitManipulator.MAX\_BIT
Biggest acceptable bit value that can be set or read: `31`.

**Kind**: static property of [<code>BitManipulator</code>](#BitManipulator)  
<a name="BitManipulator.MIN_BIT"></a>

### BitManipulator.MIN\_BIT
Lowest acceptable bit value that can be set or read: `1`.

**Kind**: static property of [<code>BitManipulator</code>](#BitManipulator)  
<a name="BitManipulator.MAX_INT"></a>

### BitManipulator.MAX\_INT
Biggest acceptable integer value that can be stored: `2 ** 31 - 1`.

**Kind**: static property of [<code>BitManipulator</code>](#BitManipulator)  
<a name="BitManipulator.MIN_INT"></a>

### BitManipulator.MIN\_INT
Lowest acceptable integer value that can be stored: `0`.

**Kind**: static property of [<code>BitManipulator</code>](#BitManipulator)  
